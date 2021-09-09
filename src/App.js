import React, { useEffect, useState } from "react";
import "./App.css";
import { Quote } from "./components/Quote";

function App() {
	const [randomQuote, setRandomQuote] = useState([
		{
			quote:
				"Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
			character: "Comic Book Guy",
			image:
				"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
			characterDirection: "Right",
		},
	]);

	useEffect(() => {
		let isFetched = true;
		const doFetch = async () => {
			const response = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes");
			const data = await response.json();
			if (isFetched) {
				setRandomQuote(data);
			}
		};
		try {
			doFetch();
		} catch (err) {
			console.log("Unable to fetch from simpsons API :", err);
		}

		return () => {
			isFetched = false;
		};
	}, []);

	const handleClick = () => {
		const doFetch = async () => {
			const response = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes");
			const data = await response.json();
			setRandomQuote(data);
		};
		try {
			doFetch();
		} catch (err) {
			console.log("Unable to fetch from simpsons API :", err);
		}
	};

	return (
		<div className="App">
			<button onClick={() => handleClick()}>Give me a new Quote !</button>
			{randomQuote.map(({ quote, character, characterDirection, image }, index) => (
				<Quote
					key={index}
					quote={quote}
					character={character}
					characterDirection={characterDirection}
					image={image}
				/>
			))}
		</div>
	);
}

export default App;
