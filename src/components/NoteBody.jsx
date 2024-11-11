import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteHeader from "./NoteHeader";
import NoteFooter from "./NoteFooter";
import { getInitialData } from "../utils";

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchQuery: ''
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: new Date().getTime().toString(), 
            title: String(title), 
            body: String(body), 
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);

    this.setState({ notes, archivedNotes });
  }
  
  onArchiveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archivedNote = this.state.notes.find((note) => note.id === id);
    archivedNote.archived = true;
    this.setState({
      notes,
      archivedNotes: [...this.state.archivedNotes, archivedNote],
    });
  }

  onUnarchiveHandler(id) {
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
    const noteToUnarchive = this.state.archivedNotes.find((note) => note.id === id);
    noteToUnarchive.archived = false;
    this.setState({
      archivedNotes,
      notes: [...this.state.notes, noteToUnarchive],
    });
  }

  searchNote(query) {
    this.setState({ searchQuery: query.toLowerCase() });
  }

  render() {
    const { notes, archivedNotes, searchQuery } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery)
    );
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery)
    );

    return (
      <>
        <NoteHeader searchNote={this.searchNote} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />

          <h2>📤 Active Notes</h2>
          {filteredNotes.length > 0 ? (
            <NoteList
              notes={filteredNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
              isArchived={false}
            />
          ) : (
            <p className="notes-list__empty-message">No records</p>
          )}

          <h2>📩 Archive</h2>
          {filteredArchivedNotes.length > 0 ? (
            <NoteList
              notes={filteredArchivedNotes}
              onDelete={this.onDeleteHandler}
              onUnarchive={this.onUnarchiveHandler}
              isArchived={true}
            />
          ) : (
            <p className="notes-list__empty-message">No records</p>
          )}
        </div>
        <NoteFooter />
      </>
    );
  }
}

export default NoteBody;
