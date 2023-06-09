import './App.css';
import React, { useState } from 'react';

function App(props) {
	const [count, setCount] = useState(0);
  return (
    <div className="App">
	<nav className="nav-bar">
		<h1>{props.name} and React</h1>
	</nav>
	<div>
		<p className="display">Count: {count}</p>
		<button onClick={()=> setCount(count +1)}>
		Click me!
		</button>
	</div>
    </div>
  );
}

export default App;
