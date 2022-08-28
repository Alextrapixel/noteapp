const NoteItem = ({ note, ininRef, upkeyRef, setRefresh }) => {
    const selectResponse = () => {
        ininRef.current.value = note.note;
        upkeyRef.current.value = note.id;
        if (ininRef.current.className.includes("d-none")) ininRef.current.className = 'form-control';
        if (upkeyRef.current.className.includes("d-none")) upkeyRef.current.className = 'btn btn-outline-warning';
    };
    const delNote = () => {
        fetch("http://localhost:8800/api/notes/" + note.id, {
            method: 'DELETE',
        }).then(() => {
            setRefresh(true);
        })
    };

    return (
        <li>
            <div onClick={selectResponse}>{note.note}</div>
            <span className="close" onClick={delNote}>x</span>
        </li>
    );
}

export default NoteItem;
