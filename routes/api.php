<?php

use Illuminate\Http\Request;

Route::post('login', 'UserController@authenticate');
Route::post('register', 'UserController@register');
Route::post('checkIfEmailExists', 'UserController@checkIfEmailExists');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');

    Route::get('words/all/{userId}', 'WordsController@index');
    Route::get('words/counts/{userId}', 'UserController@getUserWordsCounts');
    
    Route::post('words/save', 'WordsController@store');

    Route::delete('words/remove', 'WordsController@remove');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
