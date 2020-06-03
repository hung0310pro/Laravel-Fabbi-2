<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RolesPermissions extends Model
{
    protected $table = "roles_permissions";
    protected $fillable = ["roles_id","permissions_id"];


}
