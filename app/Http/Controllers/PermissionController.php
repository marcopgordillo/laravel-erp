<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function __invoke()
    {
        $permissions = ['data' => Permission::select('name')->get()->pluck('name')];
        return response()->json($permissions, Response::HTTP_OK);
    }
}
