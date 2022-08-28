<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Note::latest()->paginate(5);
        return new NoteResource(true, "List data note", $notes);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'note' => 'required'
        ]);
        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $note = Note::create([
            'note' => $request->note
        ]);

        return new NoteResource(true, 'New note data', $note);
    }

    public function show(Note $note)
    {
        return new NoteResource(true, 'Show note', $note);
    }

    public function update(Request $request, Note $note)
    {
        $validator = Validator::make($request->all(), [
            'note' => 'required'
        ]);
        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $note->update([
            'note' => $request->note
        ]);

        return new NoteResource(true, 'Note updated', $note);
    }

    public function destroy(Note $note)
    {
        $note->delete();
        return new NoteResource(true, 'Note deleted', null);
    }
}
