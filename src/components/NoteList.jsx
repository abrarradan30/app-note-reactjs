import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onUnarchive, isArchived }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={isArchived ? null : onArchive}
          onUnarchive={isArchived ? onUnarchive : null }
          isArchived={isArchived}
          {...note}
        />
      ))}
    </div>
  );
}

export default NoteList;
