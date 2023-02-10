import React, { useState, useEffect } from 'react';
import MovieImagesArr from "./MovieImages.js";
import RankingGrid from "./RankingGrid"

const RankItems = () => {

	const [items, setItems] = useState([]);
	const dataType = 1; // 1 = movies, 2 = albums


	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drop(ev) {
		ev.preventDefault();
		const targetElement = ev.target;

		if (targetElement.nodeName === "IMG") {
			return false;
		}
		if (targetElement.childNodes.length === 0) {
			var data = parseInt(ev.dataTransfer.getData("text").substring(5));
			const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
				{ ...item, ranking: parseInt(targetElement.id.substring(5)) } : { ...item, ranking: item.ranking });
			setItems(transformedCollection);
		}
	}


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
			<RankingGrid items={items} imgArr={MovieImagesArr} drag={drag} allowDrop={allowDrop} drop={drop} />
			<div className="items-not-ranked">
			{
					(items.length > 0) ? items.map((item) =>
					(item.ranking === 0) ?
					<div className="unranked-cell">
						<img id={`item-${item.id}`} src={MovieImagesArr.find(o => o.id === item.imageId)?.image}
							style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
						/>
					</div> : null
					) : <div>Loading...</div>
			}
			</div>
		</main>
		)
}

export default RankItems;