<?php 





Route::resource("transaction",\App\Http\Controllers\v1\Payment\TransactionController::class)->middleware(["auth"]);
Route::resource("first-interview",\App\Http\Controllers\v1\Workflow\FirstInterviewController::class)->middleware(["auth"]);