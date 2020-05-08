<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\PostEmail;
use Illuminate\Support\Facades\Mail;
use App\User;

class SendNotificationsEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $nofitication;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($nofitication)
    {
        $this->nofitication = $nofitication;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $linkId = $this->nofitication->id;
        $user = User::select('email')->where('level', 0)->get();
        Mail::to($user)->send(new PostEmail($linkId));
    }
}
