<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['cors']], function () {
    Route::post('login', 'UserController@authenticate');
    Route::post('register', 'UserController@register');
    Route::post('checkIfEmailExists', 'UserController@checkIfEmailExists');
    Route::get('user-levels/all', 'UserLevelsController@index');
});



Route::group(['middleware' => ['jwt.verify', 'cors']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');

    Route::get('words/all/{userId}', 'WordsController@index');
    Route::get('words/counts/{userId}', 'UserController@getUserWordsCounts');
    
    Route::post('words/save', 'WordsController@store');
    Route::delete('words/remove', 'WordsController@remove');
    Route::get('words/random/{status}/{count}/{userId}', 'WordsController@getRandomWordToTest');
    Route::post('words/check', 'WordsController@checkSelectedOption');

    Route::post('words/illustartion/new', 'WordIllustrationsController@store');
    Route::post('words/illustartion/find', 'WordIllustrationsController@findIllustration');
    Route::delete('words/illustartion/remove', 'WordIllustrationsController@remove');
    
    
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
