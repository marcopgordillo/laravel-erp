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
        return UserResource::collection(User::paginate(config('app.pagination')));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::make([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($request->hasFile('avatar')) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar);
                $user->avatar = $filePath;
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        if ($request->has('roles')) {
            $user->syncRoles($request->roles);
        }

        $user->save();

        return response()->json([
            'message'   => 'User Created Successfully',
            'data'      => new UserResource($user),
        ], Response::HTTP_CREATED);
    }

    public function updateUser(UpdateUserRequest $request, User $user)
    {
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->has('password')) {
            $data['password'] = Hash::make($request->password);
        }

        if ($request->hasFile('avatar')) {
            try {
                $filePath = Storage::disk('public')
                    ->put("avatars/user-{$user->id}", $request->avatar);
                $data['avatar'] = $filePath;
                Storage::disk('public')->delete($user->avatar);
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        if ($request->has('roles')) {
            $user->syncRoles($request->roles);
        }

        $user->update($data);

        return response()->json([
            'message'   => 'User updated successfully',
            'data'      => new UserResource($user),
        ], Response::HTTP_OK);
    }

    public function destroy(User $user)
    {
        if ($user->avatar) {
            try {
                Storage::disk('public')->delete($user->avatar);
            } catch (\Throwable $error) {
                return response()->json(['message' => $error->getMessage()], Response::HTTP_BAD_REQUEST);
            }
        }

        $user->delete();

        return response()->json([], Response::HTTP_NO_CONTENT);
    }
}
