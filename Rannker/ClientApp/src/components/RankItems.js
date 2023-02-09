import React, { useState, useEffect } from 'react';
import MovieImagesArr from "./MovieImages.js";

const RankItems = () => {

	const [items, setItems] = useState([]);
	const dataType = 1; // 1 = movies, 2 = albums

	useEffect(() => {
		fetch(`item/${dataType}`)
			.then((results) => {
				return results.json();
			})
			.then(data => {
				setItems(data);
			})
	}, [])

	return (
		<main>
			<div className="items-not-ranked">
			{
					(items.length > 0) ? items.map((item) =>
						<div className="unranked-cell">

						<img id={`item${item.id}`} src={MovieImagesArr.find(o=>o.id === item.imageId)?.image } />
						</div>
						) : <div>Loading...</div>
			}
			</div>
		</main>
		)

}

export default RankItems;