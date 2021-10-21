<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function __invoke()
    {
        $path = public_path('client/index.html');

        abort_unless(file_exists($path), 400, 'Make sure to run npm run build!');

        return file_get_contents($path);
    }
}
