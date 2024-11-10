import React from "react";
import SearchButton from "./SearchButton";

function NoteHeader({ searchNote }) {
    return (
        <div className="note-app__header">
            <h1>App Notes</h1>
            <SearchButton searchNote={searchNote}/>
        </div>
    )
}

export default NoteHeader;