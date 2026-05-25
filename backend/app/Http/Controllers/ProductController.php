<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Product::with('category')->where('active', true);

        if ($request->filled('category')) {
            $query->whereHas('category', fn($q) =>
                $q->where('slug', $request->category)
            );
        }

        if ($request->filled('featured')) {
            $query->where('featured', true);
        }

        if ($request->filled('search')) {
            $query->where(fn($q) =>
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('team', 'like', "%{$request->search}%")
            );
        }

        $products = $query->orderByDesc('featured')->orderBy('name')->get();

        return response()->json([
            'success' => true,
            'data'    => $products,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $product = Product::with('category')
            ->where('slug', $slug)
            ->where('active', true)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data'    => $product,
        ]);
    }
}
