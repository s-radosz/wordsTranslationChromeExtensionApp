<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserLevelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_levels')->insert([
            'level' => "początkujący"
        ]);

        DB::table('user_levels')->insert([
            'level' => "średnio-zaawansowany"
        ]);

        DB::table('user_levels')->insert([
            'level' => "zaawansowany"
        ]);
    }
}
