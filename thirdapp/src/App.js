import './App.css';
import React from 'react';

function App(props) {
	let notesList= ["Kaji", "Denzel", "Franklin", "Christian", "Precious", "Buma", "Josue"];
  return (
    <div className="App">
	<nav className="nav-bar">
		<b>{props.name} and React</b>
	</nav>
	<ul>
	{notesList.map((note, index) => (
          <li key={index}>{note}</li>))}
	</ul>
    </div>
  );
}

export default App;
