<?php 





Route::resource("transaction",\App\Http\Controllers\v1\Payment\TransactionController::class)->middleware(["auth"]);
Route::resource("first-interview",\App\Http\Controllers\v1\Workflow\FirstInterviewController::class)->middleware(["auth"]);
Route::resource("repo-domain",\App\Http\Controllers\v1\Repo1\RepoDomainController::class)->middleware(["auth"]);
Route::resource("repo-domain",\App\Http\Controllers\v1\Repo1\RepoDomainController::class)->middleware(["auth"]);
Route::resource("repo-domain",\App\Http\Controllers\v1\Repo1\RepoDomainController::class)->middleware(["auth"]);
Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);
Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);
Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);
Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);
Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);