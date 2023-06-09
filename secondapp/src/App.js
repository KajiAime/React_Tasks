import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotesList([...notesList, { title, note }]);
    setTitle("");
    setNote("");
  };

  return (
    <div className="App">
	<nav className="nav-bar">
		<b>{props.name} and React</b>
	</nav>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Note:
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Note</button>
      </form>
      {notesList.map((note, index) => (
        <div
          key={index}
          style={{
            background: "linear-gradient(to bottom right, #9999cc, #9999ff)",
            padding: "10px",
            margin: "20px 24%",
            borderRadius: "5px",
            width: "50%",
          }}
        >
          <div style={{fontSize: "16px", fontWeight: "bold"}}>{note.title}</div><hr/>
          <div>{note.note}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
