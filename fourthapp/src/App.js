import './App.css';
import React, { useState } from 'react';

function App(props) {
	const [counts, setCount] = useState(0);
  return (
    <div className="App">
	<nav className="nav-bar">
		<h1>{props.name} and React</h1>
	</nav>
	<div>
		<p className="display">Count: {counts}</p>
		<button onClick={()=> setCount(counts +1)}>
			Click me!
		</button>
	</div>
			{counts > 5 ?
				(<IsGreater num={counts}/>) :
			counts === 5 ?
				(<IsEqual num={counts}/>) :
				(<IsLess num={counts}/>)
			}
    </div>
  );
}

function IsGreater(props) {
	return (
		<div>{props.num} is greater than 5.</div>
	);
}
function IsEqual(props) {
	return (
		<div>{props.num} is equal to 5.</div>
	);
}
function IsLess(props) {
	return (
		<div>{props.num} is less than 5.</div>
	);
}

export default App;
