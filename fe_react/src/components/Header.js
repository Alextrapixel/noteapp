import { useState } from "react";

const Header = (props) => {
    const [note, setNotes] = useState("");

    const addNote = () => {
        const newNote = { note };
        fetch("http://localhost:8800/api/notes", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newNote)
        }).then(() => {
            setNotes("");
            props.setRefresh(true);
        });
    };
    const updNote = () => {
        const upNote = { "note": props.ininRef.current.value };
        fetch("http://localhost:8800/api/notes/" + props.upkeyRef.current.value, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(upNote)
        }).then(() => {
            props.ininRef.current.value = '';
            props.ininRef.current.className = "d-none form-control";
            props.upkeyRef.current.className = "btn btn-outline-warning d-none";
            props.setRefresh(true);
        });
    }

    return (
        <div id="note-header">
            <h2 className="card-header d-flex justify-content-center">Note Lite</h2>
            <div className="card-body">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Note content" aria-describedby="btnAdd" value={note} onChange={(e) => setNotes(e.target.value)} />
                    <button id="btnAdd" className="btn btn-outline-primary" type="button" onClick={addNote}>Add</button>
                </div>
                <input ref={props.upkeyRef} type="hidden" />
                <div className="input-group mb-3">
                    <input type="text" className="d-none form-control" placeholder="Note content" ref={props.ininRef} />
                    <button id="btnUpd" className="btn btn-outline-warning d-none" type="button" ref={props.upkeyRef} onClick={updNote}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default Header;