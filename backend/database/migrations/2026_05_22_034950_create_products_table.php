<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('team');
            $table->string('version'); // Jogador, Retrô, Seleção
            $table->string('season');  // Ex: 2026/27
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2);
            $table->string('image_url');
            $table->json('sizes')->default('["P","M","G","GG"]');
            $table->boolean('featured')->default(false);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
