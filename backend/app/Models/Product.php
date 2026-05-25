<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    protected $fillable = [
        'category_id', 'name', 'slug', 'team', 'version',
        'season', 'description', 'price', 'image_url',
        'sizes', 'featured', 'active',
    ];

    protected $casts = [
        'sizes'    => 'array',
        'featured' => 'boolean',
        'active'   => 'boolean',
        'price'    => 'float',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
