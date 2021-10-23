<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{
    public function store(Request $request)
    {
        try {
            $user = Auth::user();
            $filePath = Storage::disk('public')
                ->put("avatars/user-{$user->id}", $request->file, 'public');
            $user->avatar = config('app.spaces') . "/storage/{$filePath}";
            $user->save();
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        return new UserResource($user);
    }
}
