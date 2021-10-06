import React, { useState } from "react";

export default function Task({ task, handleDelete, handleEdit }) {
  const { text, id } = task;
  const [edit, setEdit] = useState(false);
  const [inputText, setInputText] = useState(text);

  const openEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if (edit === true) {
      handleEdit(inputText, id);
    }
  };
  const editTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <li key={id}>
      {text}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <button onClick={openEdit}> {edit ? "Submit" : "Edit"}</button>
      {edit === true && (
        <input onChange={editTextHandler} type="text" value={inputText} />
      )}
    </li>
  );
}
