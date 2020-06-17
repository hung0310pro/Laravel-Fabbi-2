<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthCustomController@login');
    Route::post('register', 'AuthCustomController@register');
    Route::get('logout', 'AuthCustomController@logout');
    Route::get('me', 'AuthCustomController@me');

    // create notification when created notification
    // apiuser.js,store.js,RedirectComponent.vue,Notifications.php,firebase-messaging-sw.js(chỗ xampp)
    Route::post('notifications/token','Notifications@getMessageFirebase');
    Route::post('notifications/updateToken','AuthCustomController@updateNotificationToken');
    // end
    Route::resource('notifications', 'Notifications');
});

Route::get('/mail', 'EmailController@sendEMail');
