package ru.aurafx.design;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.job.JobParameters;
import android.app.job.JobService;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Build;
import org.json.JSONArray;
import org.json.JSONObject;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/** Checks the account feed while Android permits background work. Delivery is inexact. */
public final class OrderNotificationJob extends JobService {
  @Override public boolean onStartJob(JobParameters parameters) {
    new Thread(() -> {
      HttpURLConnection connection=null;
      try {
        SharedPreferences prefs=getSharedPreferences("MainActivity",MODE_PRIVATE);
        String cookie=prefs.getString("session","");
        if(cookie.isEmpty())return;
        connection=(HttpURLConnection)new URL("https://aurafx-design.ru/api/account/notifications").openConnection();
        connection.setConnectTimeout(10000);connection.setReadTimeout(10000);
        connection.setRequestProperty("Cookie",cookie);
        if(connection.getResponseCode()!=200)return;
        JSONObject response;
        try(InputStream in=connection.getInputStream()){response=new JSONObject(new String(in.readAllBytes(),StandardCharsets.UTF_8));}
        JSONArray events=response.optJSONArray("notifications");
        if(events==null||events.length()==0)return;
        JSONObject latest=events.optJSONObject(0);if(latest==null)return;
        int id=latest.optInt("id"),seen=prefs.getInt("last_event_id",0);
        if(id<=seen)return;
        prefs.edit().putInt("last_event_id",id).apply();
        if(seen==0||!latest.isNull("read_at"))return;
        if(Build.VERSION.SDK_INT>=33&&checkSelfPermission("android.permission.POST_NOTIFICATIONS")!=PackageManager.PERMISSION_GRANTED)return;
        NotificationManager manager=(NotificationManager)getSystemService(NOTIFICATION_SERVICE);
        if(manager==null)return;
        String channel="aurafx_orders";
        if(Build.VERSION.SDK_INT>=26)manager.createNotificationChannel(new NotificationChannel(channel,"Заказы AuraFX",NotificationManager.IMPORTANCE_DEFAULT));
        Intent open=new Intent(this,MainActivity.class);open.putExtra("open_notifications",true);
        PendingIntent action=PendingIntent.getActivity(this,0,open,PendingIntent.FLAG_UPDATE_CURRENT|PendingIntent.FLAG_IMMUTABLE);
        Notification notification=new Notification.Builder(this,channel).setSmallIcon(android.R.drawable.ic_dialog_info)
          .setContentTitle(latest.optString("title","AuraFX")).setContentText(latest.optString("body","Обновление заказа"))
          .setContentIntent(action).setAutoCancel(true).build();
        manager.notify(id,notification);
      } catch(Exception ignored) {} finally {if(connection!=null)connection.disconnect();jobFinished(parameters,false);}
    },"aurafx-notifications").start();
    return true;
  }
  @Override public boolean onStopJob(JobParameters parameters){return true;}
}
