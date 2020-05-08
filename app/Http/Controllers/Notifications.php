<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications as Notification;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Jobs\SendNotificationsEmail;
use App\UsersNotifications;

class Notifications extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if ($user->level == 1) {
            $nofitication = Notification::create([
                'title' => $request->title,
                'content' => $request->contents,
                'code' => $request->code,
                'created_by' => $user->id,
                'update_by' => $user->id
            ]);

            if ($nofitication) {
                dispatch(new SendNotificationsEmail($nofitication));
            }
            return response()->json(['message' => 'Add Notification And Send Email Success']);
        } else {
            return response()->json(['message' => 'Add Notification Faild']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if (!Auth::check()) {
            return response()->json('', 401);
        }
        try {
            $notification = Notification::findOrFail($id, ['title', 'content']);
            if ($notification && Auth::check()) {
                $user = Auth::user();
                $check = UsersNotifications::where('users_id',$user->id)->where('notifications_id',$id)->get();
                if(count($check->toArray()) < 1) {
                    UsersNotifications::create([
                        'users_id' => $user->id,
                        'notifications_id' => $id,
                    ]);
                }
            }
            return response()->json($notification);
        } catch (ModelNotFoundException $e) {
            return abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
