<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;

class WordsController extends Controller
{
    public function index(Request $request) {
        $userId = $request->userId;

        $words = Word::where('user_id', $userId)
                        ->latest()
                        ->paginate(15);

        return response()->json(
            ['result' => $words
        ], 201);
    }

    public function store(Request $request) {
        $userId = $request->userId;
        $en = $request->en;
        $pl = $request->pl;

        $word = new Word;

        $word->user_id = $userId;
        $word->en = $en;
        $word->pl = $pl;

        $word->save();

        return response()->json(
            ['result' => $word
        ], 201);
    }

    public function remove(Request $request) {
        $id = $request->id;

        var_dump($id);

        $word = Word::find($id);
        $word->delete();

        return response()->json(
            ['result' => $word
        ], 201);
    }
}
