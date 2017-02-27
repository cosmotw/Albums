<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class AlbumsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $photosUrl = [
            'https://c1.staticflickr.com/9/8497/29112731450_0ec33575b1_k.jpg',
            'https://c1.staticflickr.com/2/1626/24725726591_bce442f06c_o.jpg',
            'https://c1.staticflickr.com/8/7352/16545287551_023fc394e4_o.jpg',
            'https://c1.staticflickr.com/1/567/22255378448_52ed3b1976_o.jpg',
            'https://c1.staticflickr.com/5/4080/4949399460_fdbe32496a_o.jpg',
            'https://c1.staticflickr.com/9/8119/30039372472_08810a26ac_o.jpg',
            'https://c1.staticflickr.com/6/5666/29927785443_8e0d366eef_o.jpg'
        ];

        foreach($photosUrl as $url) {
            $date = Carbon::create(2016, 1, 1, 0, 0, 0);

            DB::table('albums')->insert([
                'title' => str_random(10),
                'photo_url' => $url,
                'description' => str_random(100),
                'category' => rand(1, 10),
                'created_at' => $date->addWeeks(rand(1, 52))->addHours(rand(1, 24))->addMinutes(rand(1, 59))->addSeconds(rand(1, 59))->format('Y-m-d H:i:s'),
                'updated_at' => $date->addWeeks(rand(1, 52))->addHours(rand(1, 24))->addMinutes(rand(1, 59))->addSeconds(rand(1, 59))->format('Y-m-d H:i:s')
            ]);
        }
    }
}
