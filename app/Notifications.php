<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    protected $table = "notifications";
    protected $fillable = ["id","title","content","created_by","update_by"];

    public function notificationsUsers(){
        return $this->hasMany('App\UsersNotifications','notifications_id','id');
    }

    public function users(){
        return $this->belongsToMany('App\Users','users_notifications','notifications_id');
    }
}
