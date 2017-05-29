<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->defineAs(App\Albums::class, 'newPhotos', function (Faker\Generator $faker) {
    $photosUrl = [
            'https://c1.staticflickr.com/9/8497/29112731450_0ec33575b1_k.jpg',
            'https://c1.staticflickr.com/2/1626/24725726591_bce442f06c_o.jpg',
            'https://c1.staticflickr.com/8/7352/16545287551_023fc394e4_o.jpg',
            'https://c1.staticflickr.com/1/567/22255378448_52ed3b1976_o.jpg',
            'https://c1.staticflickr.com/5/4080/4949399460_fdbe32496a_o.jpg',
            'https://c1.staticflickr.com/9/8119/30039372472_08810a26ac_o.jpg',
            'https://c1.staticflickr.com/6/5666/29927785443_8e0d366eef_o.jpg'
    ];

    return [
        'title' => str_random(10),
        'photo_url' => $photosUrl[array_rand($photosUrl)],
        'description' => str_random(100),
        'category_id' => 1,
        'created_at' => $faker->dateTime($max = 'now')
    ];
});
