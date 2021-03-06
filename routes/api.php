<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/category','CategoryController@index');

Route::post('/category/store','CategoryController@store');

Route::post('/category/delete/{id}','CategoryController@destroy');

Route::get('/category/edit/{id}','CategoryController@edit');

Route::put('/category/{id}','CategoryController@update');



