<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FrontController extends Controller
{
    public function home () 
    {
        return Inertia::render('Front/Home',[
            'canLoggin'=>Route::has('loggin'),
            'canRegister'=>Route::has('Register'),
        ]);
    }
    
}
