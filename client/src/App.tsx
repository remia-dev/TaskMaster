import { useEffect, useState } from "react";
import "./App.css";
import { NoteModel } from "./models/note";
import axios from "axios";
import Note from "./components/Notes";
import * as NoteApi from "./network/notes.api";
import AddNoteDialog from "./components/AddNoteDialog";
// import fetch from 'cross-fetch'

function App() {
  // Calling setNotes in the backend
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

  // Execute side effects
  // Before we re-render the webpage we need to fetch the data
  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NoteApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
    // only execute one time in the beginning
  }, []);

  return (
    <>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={()=>setShowAddNoteDialog(true)}
      >
        Launch demo modal
      </button>

      <div className="app flex gap-10 justify-center flex-wrap items-center py-10">
        {notes.map((note) => (
          <Note note={note} key={note._id} />
        ))}
      </div>

      {showAddNoteDialog && 
      <AddNoteDialog onDismiss={()=> setShowAddNoteDialog(false)}
      onNoteSaved={()=>{}}
      />}
    </>
  );
}

export default App;
