<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCollection;
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
        return UserResource::collection(User::paginate(config('app.pagination')));
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

        if ($request->has('avatar')) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar, 'public');
                $user->avatar = config('app.spaces') . "/storage/{$filePath}";
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        if ($request->has('roles')) {
            $user->syncRoles($request->roles);
        }

        $user->save();

        return response()->json(['message' => 'User Created Successfully'], Response::HTTP_CREATED);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->has('password')) {
            $data['password'] = Hash::make($request->password);
        }

        if ($request->has('avatar')) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar, 'public');
                $data['avatar'] = config('app.spaces') . "/storage/{$filePath}";
                Storage::delete($user->avatar, 'public');
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        if ($request->has('roles')) {
            $user->syncRoles($request->roles);
        }

        $user->update($data);

        return response()->json(['message' => 'User updated successfully'], Response::HTTP_OK);
    }

    public function destroy(User $user)
    {
        if ($user->has('avatar')) {
            try {
                Storage::delete($user->avatar,'public');
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        $user->delete();

        return response()->json([], Response::HTTP_NO_CONTENT);
    }
}
