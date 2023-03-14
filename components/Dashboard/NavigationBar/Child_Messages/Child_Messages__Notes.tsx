import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch, BsTrash } from "react-icons/bs";

export default function Child_Messages__Notes() {
  const [notes, setNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const addNoteMenuRef = useRef(null);
  const inputNoteRef = useRef(null);

  function openAddNoteForm() {
    addNoteMenuRef.current.classList.remove("hidden");
  }

  function closeAddNoteMenu() {
    addNoteMenuRef.current.classList.add("hidden");
  }

  const addNote = (e) => {
    e.preventDefault();

    if (inputNote != "") {
      const date = `${new Date().getDate()}-${new Date().getUTCMonth()}-${new Date().getFullYear()}`;

      const newNote = {
        desc: inputNote,
        date,
        id: `note${Math.random()}`,
      };

      setNotes((value) => {
        const newItems = [newNote, ...value];
        localStorage.setItem("notes", JSON.stringify(newItems));
        return newItems;
      });
    }

    setInputNote("");
    inputNoteRef.current.value = "";
    closeAddNoteMenu();
  };

  const deleteNote = useCallback((id: string) => {
    setNotes((value) => {
      const shallowCopy = value;
      const filteredArray = shallowCopy.filter((ele) => ele.id != id);
      localStorage.setItem("notes", JSON.stringify(filteredArray));
      return [...filteredArray];
    });
  }, []);

  useEffect(() => {
    return () => {
      const existingNotes = JSON.parse(localStorage.getItem("notes"));
      setNotes(existingNotes);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center py-4 px-6 border-b-solid border-b-[1.5px] border-b-gray-600">
        <AiOutlinePlus
          onClick={openAddNoteForm}
          size={25}
          className="p-1 bg-gray-600 rounded"
        />

        <div className="text-center">
          <p className="">Notes</p>
          <p className="text-[12px] text-gray-300">Add new notes</p>
        </div>

        <BsSearch size={25} className="p-1 bg-gray-600 rounded" />

        <div
          ref={addNoteMenuRef}
          onClick={closeAddNoteMenu}
          onSubmit={addNote}
          className="hidden absolute top-0 right-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-20"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-2 items-center justify-center p-4 bg-gray-800 rounded"
          >
            <input
              ref={inputNoteRef}
              onChange={(e) => setInputNote(e.target.value)}
              autoFocus
              placeholder="What do you have in mind?"
              className="w-full text-sm p-2 bg-gray-700 text-white rounded outline-none border-none"
            />
            <button
              type="submit"
              className="p-2 text-sm bg-green-600 cursor-pointer rounded"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>

      <motion.div
        layout
        layoutScroll
        animate={{
          transition: {
            duration: 0.4,
          },
        }}
        className="w-full max-h-[80vh] flex flex-col text-sm overflow-auto"
      >
        {/* MAPPING DATA */}

        {notes.map((ele, ind) => {
          return (
            <div
              key={ele.id}
              className="flex flex-row items-center justify-between gap-2 p-6 py-3 border-b-[1.5px] border-solid border-gray-600 hover:bg-gray-700"
            >
              <div title={ele.desc}>
                <p className="truncate max-w-[250px]">{ele.desc}</p>
                <p className="text-[12px] text-gray-400">{ele.date}</p>
              </div>

              <div className="flex gap-2">
                {/* <BsPencil
                  size={23}
                  className="p-1 bg-cyan-600 rounded-lg hover:bg-cyan-700"
                /> */}
                <BsTrash
                  onClick={() => deleteNote(ele.id)}
                  size={23}
                  className="p-1 bg-red-600 rounded-lg hover:bg-red-700"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
