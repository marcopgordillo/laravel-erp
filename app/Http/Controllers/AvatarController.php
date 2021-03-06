<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAvatarRequest;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{
    public function store(StoreAvatarRequest $request)
    {
        try {
            $user = Auth::user();
            $filePath = Storage::disk('public')
                ->put("avatars/user-{$user->id}", $request->file, 'public');
            if (isset($user->avatar)) {
                Storage::delete($user->avatar, 'public');
            }
            $user->avatar = $filePath;
            $user->save();
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        return response()->json(['message' => 'Avatar added Successfully'], Response::HTTP_OK);
    }
}
