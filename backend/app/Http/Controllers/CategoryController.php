<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $categories = Category::withCount(['products' => fn($q) =>
            $q->where('active', true)
        ])->get();

        return response()->json([
            'success' => true,
            'data'    => $categories,
        ]);
    }
}
