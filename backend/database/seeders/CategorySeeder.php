<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Seleções',   'slug' => 'selecoes',   'icon' => '🌍'],
            ['name' => 'Clubes',     'slug' => 'clubes',     'icon' => '🏟️'],
            ['name' => 'Retrô',      'slug' => 'retro',      'icon' => '🏆'],
            ['name' => 'Jogador',    'slug' => 'jogador',    'icon' => '⭐'],
        ];

        foreach ($categories as $cat) {
            Category::firstOrCreate(['slug' => $cat['slug']], $cat);
        }
    }
}
