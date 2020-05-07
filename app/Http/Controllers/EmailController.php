<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\PostEmail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEMail(){
        $detail = [
            'title' => 'Title test 123',
            'body' => 'Body email test'
        ];

        Mail::to('hung0210pro@gmail.com')->send(new PostEmail($detail));
        return 'Email sent Successfully';
    }
}
