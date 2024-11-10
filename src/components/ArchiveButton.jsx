import React from "react";

function ArchviveButton({ id, onArchive }) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>
}

export default ArchviveButton;