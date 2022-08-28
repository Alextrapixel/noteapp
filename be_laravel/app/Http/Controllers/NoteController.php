<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Note::latest()->paginate(5);

        return view('notes.index', compact('notes'));
    }

    public function create()
    {
        return view('notes.create');
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'note' => 'required|min:5'
        ]);
        Note::create(['note' => $request->note]);
        return redirect()->route('notes.index')->with(['success' => 'note saved!']);
    }

    public function edit(Note $note)
    {
        return view('notes.edit', compact('note'));
    }
    public function update(Request $request, Note $note)
    {
        $this->validate($request, ['note' => 'required|min:5']);
        $note->update(['note' => $request->note]);
        return redirect()->route('notes.index')->with(['success' => 'note edited!']);
    }

    public function destroy(Note $note)
    {
        $note->delete();
        return redirect()->route('notes.index')->with(['success' => 'note deleted!']);
    }
}
