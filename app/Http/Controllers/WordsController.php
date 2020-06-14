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
        ], 200);
    }

    public function store(Request $request) {
        $userId = $request->userId;
        $en = $request->en;
        $pl = $request->pl;

        $word = new Word;

        $word->user_id = $userId;
        $word->en = $en;
        $word->pl = $pl;
        $word->success_answers_count = 0;
        $word->failure_answers_count = 0;

        $word->save();

        return response()->json(
            ['result' => $word
        ], 200);
    }

    public function remove(Request $request) {
        $id = $request->id;

        $word = Word::find($id);
        $word->delete();

        return response()->json(
            ['result' => $word
        ], 200);
    }

    public function getRandomWordToTest(Request $request) {
        $status = $request->status;
        $count = $request->count;
        $userId = $request->userId;

        $words = Word::where([['status', $status], ['user_id', $userId]])
                        ->with('illustration')
                        ->inRandomOrder()
                        ->take($count)
                        ->get();

        return response()->json(
            ['result' => $words
        ], 200);
    }

    public function checkSelectedOption(Request $request) {
        $word_id = $request->wordId;
        $translation = $request->selectedTranslation;

        $word = Word::where('id', $word_id)
                        ->first();

        if($word->pl === $translation) {
            Word::where('id', $word_id)
                    ->increment('success_answers_count');

            return response()->json(
                ['result' => "success"
            ], 200);
        } else {
            Word::where('id', $word_id)
                    ->increment('failure_answers_count');

            return response()->json(
                ['result' => "failure"
            ], 200);
        }
    }
}
