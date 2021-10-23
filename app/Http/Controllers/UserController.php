<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        if (Auth::user()->isAdmin()) {
            return UserResource::collection(User::paginate(10));
        }

        return response()->json(['message' => 'Forbidden'], Response::HTTP_FORBIDDEN);
    }

    public function show(User $user)
    {
        if (Auth::user()->isAdmin()) {
            return new UserResource($user);
        }
        return response()->json(['message' => 'Forbidden'], Response::HTTP_FORBIDDEN);
    }
}
