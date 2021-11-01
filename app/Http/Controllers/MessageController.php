<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::orderByDesc('created_at')->paginate(6);
        return MessageResource::collection($messages);
    }

    public function store(StoreMessageRequest $request)
    {
        $user = Auth::user();
        $message = new Message(['body' => $request->body]);
        $user->messages()->save($message);

        $messages = Message::orderByDesc('created_at')->paginate(6);
        return MessageResource::collection($messages);
        return response()->json(['message' => 'Message added Successfully'], Response::HTTP_CREATED);
    }
}
