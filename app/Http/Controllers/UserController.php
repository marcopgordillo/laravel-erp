<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('permission:users-list|users-create|users-edit|users-delete', ['only' => ['index','show']]);
        // $this->middleware('permission:users-create', ['only' => ['create','store']]);
        // $this->middleware('permission:users-edit', ['only' => ['edit','update']]);
        // $this->middleware('permission:users-delete', ['only' => ['destroy']]);
        $this->authorizeResource(User::class, 'user');
    }

    public function index()
    {
        return UserResource::collection(User::paginate(10));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if (isset($request->avatar)) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar, 'public');
                $user->avatar = config('app.spaces') . "/storage/{$filePath}";
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        $user->save();

        return response()->json(new UserResource($user), Response::HTTP_CREATED);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        Log::debug("User Update Controller");

        if (isset($request->password)) {
            $data['password'] = Hash::make($request->password);
        }

        if (isset($request->avatar)) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar, 'public');
                $data['avatar'] = config('app.spaces') . "/storage/{$filePath}";
                Storage::delete($user->avatar, 'public');
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        $user->update($data);

        return response()->json(new UserResource($user), Response::HTTP_OK);
    }

    public function destroy(User $user)
    {
        if (isset($user->avatar)) {
            try {
                Storage::delete($user->avatar,'public');
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        $user->delete();
    }
}
