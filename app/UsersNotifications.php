<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersNotifications extends Model
{
    protected $table = "users_notifications";
    protected $fillable = ["users_id","notifications_id"];
    public $timestamps = false;
}
