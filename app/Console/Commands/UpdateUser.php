<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class UpdateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sms:updateuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description update user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $number = rand(10,1000);
        $users = User::findOrFail(1);
        $users->name = 'Name Test '.$number;
        $users->save();
        $this->info('Update done!');
    }

}
