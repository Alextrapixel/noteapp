import React, { useEffect, useState } from "react";
import NoteItem from './NoteItem';

const NoteList = ({ ininRef, upkeyRef, isRefresh, setRefresh }) => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8800/api/notes").then((res) => {
            return res.json();
        }).then((data) => {
            setRefresh(false);
            setNotes(data.data.data);
        }).catch((err) => {
            setRefresh(false);
            if (err.name === "AbortError") {
                console.log("fetch aborted.");
            }
        });
    }, [isRefresh, setRefresh]);

    return (
        <div className="card-body">
            <ul id="note-list">
                {notes.map((note) => (
                    <NoteItem note={note} key={note.id} ininRef={ininRef} upkeyRef={upkeyRef} setRefresh={setRefresh} />
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
