<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeCategoryNameOnAlbumsTableCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('albums', function (Blueprint $table) {
            DB::statement('ALTER TABLE `albums` MODIFY `category` INTEGER UNSIGNED NULL;');
            $table->renameColumn('category', 'category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('albums', function (Blueprint $table) {
            DB::statement('ALTER TABLE `albums` MODIFY `category_id` INTEGER NULL;');
            $table->renameColumn('category_id', 'category');
        });
    }
}
