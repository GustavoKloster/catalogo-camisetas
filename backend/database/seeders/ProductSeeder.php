<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $selecoes = Category::where('slug', 'selecoes')->first()->id;
        $clubes   = Category::where('slug', 'clubes')->first()->id;
        $retro    = Category::where('slug', 'retro')->first()->id;

        $products = [
            // ── Seleções ──────────────────────────────────────────────────
            [
                'category_id' => $selecoes,
                'name'        => 'Brasil 2026 - Jogador',
                'slug'        => 'brasil-2026-jogador',
                'team'        => 'Brasil',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 189.90,
                'image_url'   => 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop',
                'featured'    => true,
            ],
            [
                'category_id' => $selecoes,
                'name'        => 'Argentina 2026 - Jogador',
                'slug'        => 'argentina-2026-jogador',
                'team'        => 'Argentina',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 189.90,
                'image_url'   => 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
                'featured'    => true,
            ],
            [
                'category_id' => $selecoes,
                'name'        => 'França 2026 - Jogador',
                'slug'        => 'franca-2026-jogador',
                'team'        => 'França',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 179.90,
                'image_url'   => 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=600&fit=crop',
                'featured'    => true,
            ],
            [
                'category_id' => $selecoes,
                'name'        => 'Portugal 2026 - Jogador',
                'slug'        => 'portugal-2026-jogador',
                'team'        => 'Portugal',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 179.90,
                'image_url'   => 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop',
                'featured'    => false,
            ],
            [
                'category_id' => $selecoes,
                'name'        => 'Alemanha 2026 - Jogador',
                'slug'        => 'alemanha-2026-jogador',
                'team'        => 'Alemanha',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 179.90,
                'image_url'   => 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=600&fit=crop',
                'featured'    => false,
            ],
            [
                'category_id' => $selecoes,
                'name'        => 'Espanha 2026 - Jogador',
                'slug'        => 'espanha-2026-jogador',
                'team'        => 'Espanha',
                'version'     => 'Jogador',
                'season'      => '2026/27',
                'price'       => 179.90,
                'image_url'   => 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop',
                'featured'    => false,
            ],
            // ── Clubes ────────────────────────────────────────────────────
            [
                'category_id' => $clubes,
                'name'        => 'Real Madrid 2025 - Jogador',
                'slug'        => 'real-madrid-2025-jogador',
                'team'        => 'Real Madrid',
                'version'     => 'Jogador',
                'season'      => '2024/25',
                'price'       => 169.90,
                'image_url'   => 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&h=600&fit=crop',
                'featured'    => false,
            ],
            [
                'category_id' => $clubes,
                'name'        => 'Barcelona 2025 - Jogador',
                'slug'        => 'barcelona-2025-jogador',
                'team'        => 'Barcelona',
                'version'     => 'Jogador',
                'season'      => '2024/25',
                'price'       => 169.90,
                'image_url'   => 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=600&fit=crop',
                'featured'    => false,
            ],
            // ── Retrô ─────────────────────────────────────────────────────
            [
                'category_id' => $retro,
                'name'        => 'Brasil 1970 - Retrô',
                'slug'        => 'brasil-1970-retro',
                'team'        => 'Brasil',
                'version'     => 'Retrô',
                'season'      => '1970',
                'price'       => 159.90,
                'image_url'   => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
                'featured'    => true,
            ],
            [
                'category_id' => $retro,
                'name'        => 'Argentina 1986 - Retrô',
                'slug'        => 'argentina-1986-retro',
                'team'        => 'Argentina',
                'version'     => 'Retrô',
                'season'      => '1986',
                'price'       => 159.90,
                'image_url'   => 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=600&fit=crop',
                'featured'    => true,
            ],
        ];

        foreach ($products as $p) {
            Product::firstOrCreate(['slug' => $p['slug']], $p);
        }
    }
}
