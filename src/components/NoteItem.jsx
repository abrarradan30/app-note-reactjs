import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";
import { showFormattedDate } from "../utils";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  onUnarchive,
  isArchived
}) {

  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {!isArchived && onArchive && <ArchiveButton id={id} onArchive={onArchive} />}
        {isArchived && onUnarchive && <UnarchiveButton id={id} onUnarchive={onUnarchive} />}
      </div>
    </div>
  );
}

export default NoteItem;
