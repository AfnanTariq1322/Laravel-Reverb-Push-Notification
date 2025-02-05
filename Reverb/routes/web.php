<?php

use Illuminate\Support\Facades\Route;
use App\Events\MessageSent;
Route::get('/', function () {
    return view('welcome');
});

Route::get('/broadcast',function(){
    $message = "Hello";
    broadcast(new MessageSent($message));
    return 'Message Broadcasted!';
});

Route::get('/view', function () {
    return view('view');
});
