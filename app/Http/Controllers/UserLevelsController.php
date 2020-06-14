<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserLevel;

class UserLevelsController extends Controller
{
    public function index(Request $request) {
        $userLevels = UserLevel::all();

        return response()->json(
            ['result' => $userLevels
        ], 200); 
    }
}
