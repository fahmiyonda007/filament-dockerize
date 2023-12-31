<?php

use App\Http\Controllers\ProjectPlanController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;
use pxlrbt\FilamentExcel\Exports\ExcelExport;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return redirect('admin');
// });
Route::redirect('/', '/admin');
Route::get("/profile", function () {
    // Only verified users may access this route...
})->middleware('verified');
