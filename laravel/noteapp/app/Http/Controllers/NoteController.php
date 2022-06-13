<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NoteController extends Controller
{
    public function index() {
        $notes = Note::latest()->paginate(5);
        return view('notes.index', compact('notes'));
    }

    public function create() {
        return view('notes.create');
    }

    public function store(Request $request) {
        //validate form
        $this->validate($request, [
            'note'   => 'required|min:10'
        ]);

        //create post
        Note::create([
            'note'   => $request->note
        ]);

        //redirect to index
        return redirect()->route('notes.index')->with(['success' => 'Data Berhasil Disimpan!']);
    }

    public function edit(Note $note) {
        return view('notes.edit', compact($note));
    }

    public function update(Request $request, Note $note) {
        $this->validate($request, [
            'note'   => 'required|min:10'
        ]);

        $note->update([
            'note'   => $request->note
        ]);

        //redirect to index
        return redirect()->route('notes.index')->with(['success' => 'Data Berhasil Diubah!']);
    }
}
