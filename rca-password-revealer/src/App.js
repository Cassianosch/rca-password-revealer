import { useState } from "react";
import './App.css';

const App = () => {
	const [shown, setShown] = useState(false);

	return (
		<div className="App">
			<div>
				<input
					type={shown ? "text" : "password"}
					className="autocomplete__input"
				/>
				<button className="autocomplete__button" onClick={() => setShown(!shown)}>Show/Hide</button>
			</div>
		</div>
	);
}

export default App;
