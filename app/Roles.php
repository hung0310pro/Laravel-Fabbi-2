<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    protected $table = "roles";
    protected $fillable = ["id","title"];

    public function rolesPermissions(){
        return $this->hasMany('App\RolesPermissions','roles_id','id');
    }

    public function users(){
        return $this->hasMany('App\Users','roles_id','id');
    }

    public function permissions(){
        return $this->belongsToMany('App\Permissions','roles_permissions','roles_id');
    }
}
