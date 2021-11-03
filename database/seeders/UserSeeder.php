<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
        ])->assignRole('super-admin');

        User::factory()->create([
            'name' => 'Pepe',
            'email' => 'pepe@pepe.com',
        ])->assignRole('viewer');

        // User::factory(100)->create();
    }
}
