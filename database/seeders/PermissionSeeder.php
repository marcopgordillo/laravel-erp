<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = collect([
            'users-list', 'users-create', 'users-update', 'users-delete',
            'roles-list', 'roles-create', 'roles-update', 'roles-delete',
            'accounts-list', 'accounts-create', 'accounts-update', 'accounts-delete',
        ])->map(fn($permission) => Permission::create(['name' => $permission]));

        $permissionsByRole = collect([
            'super-admin' => Permission::all()->pluck('name')->toArray(),
            'editor' => ['users-list', 'users-create', 'users-update', 'users-delete'],
            'viewer' => ['users-list', 'accounts-list'],
        ])->map(fn($permissions, $role) => Role::create(['name' => $role])->syncPermissions($permissions));
    }
}
