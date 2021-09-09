import React from "react";

export const Quote = ({ quote, character, characterDirection, image }) => {
	return (
		<div>
			<div>{character}</div>
			<div>{quote}</div>
            <img src={image} alt="A character from Simpsons tv show" />
		</div>
	);
};
