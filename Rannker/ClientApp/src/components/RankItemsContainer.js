import { useState } from "react";
import RankItems from "./RankItems";

const RankItemsContainer = ({ dataType, imgArr }) => {
	const movieLocalStorageKey = "movies";
	const albumLocalStorageKey = "albums";

	var localStorageKey = "";

	const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));
	const [albumItems, setAlbumItems] = useState(JSON.parse(localStorage.getItem(albumLocalStorageKey)));

	var data = [];
	var setFunc = null;

	if (dataType === 1) {

		data = movieItems;
		setFunc = setMovieItems;
		localStorageKey = movieLocalStorageKey;

	} else if (dataType === 2) {

		data = albumItems;
		setFunc = setAlbumItems;
		localStorageKey = albumLocalStorageKey;
	}

	return (
		<RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localStorageKey={localStorageKey} />
	)
}

export default RankItemsContainer;