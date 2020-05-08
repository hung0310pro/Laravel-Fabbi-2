<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permissions extends Model
{
    protected $table = "permissions";
    protected $fillable = ["id","title","name"];

    public function permissionsRoles(){
        return $this->hasMany('App\RolesPermissions','permissions_id','id');
    }

    public function roles(){
        return $this->belongsToMany('App\Roles','roles_permissions','permissions_id');
    }
}
