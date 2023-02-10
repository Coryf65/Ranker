
const RankingGrid = ({ items, imgArr }) => {

	const rankingGrid = [];
	const cellCollectionSTier = [];
	const cellCollectionATier = [];
	const cellCollectionBTier = [];
	const cellCollectionCTier = [];
	const cellCollectionDTier = [];
	const cellCollectionFTier = [];
	const cellCollectionUTier = [];

	function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
		if (rankNum > 0) {
			var item = items.find(o => o.ranking === rankNum);
			cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>);
		} else {
			cellCollection.push(<div className="row-label">
				<h4>{rowLabel}</h4>
			</div>);
		}
	}

	function createCellsForRow(rowNumber) {

		let rankNum = 0;
		let currCollection = [];
		let label = "";
		const numCells = 5; // mess with this

		for (var a = 1; a <= numCells; a++) {
			rankNum = (a === 1) ? 0 : (numCells * (rowNumber - 1)) + a - rankNum;
		}

		if (rowNumber === 1) {
			currCollection = cellCollectionSTier;
			label = "S Tier";
		}
		else if (rowNumber === 3) {
			currCollection = cellCollectionATier;
			label = "A Tier";
		}
		else if (rowNumber === 4) {
			currCollection = cellCollectionBTier;
			label = "B Tier";
		}
		else if (rowNumber === 5) {
			currCollection = cellCollectionCTier;
			label = "C Tier";
		}
		else if (rowNumber === 6) {
			currCollection = cellCollectionDTier;
			label = "D Tier";
		}
		else if (rowNumber === 7) {
			currCollection = cellCollectionFTier;
			label = "F Tier";
		}
		else if (rowNumber === 8) {
			currCollection = cellCollectionUTier;
			label = "U Tier";
		}

		pushCellMarkupToArr(currCollection, rankNum, label);
	}

	function createCellsForRows() {

		const maxRows = 8;

		for (var row = 1; row <= maxRows; row++) {
			createCellsForRow(row);
		}
	}


	function createRowsForGrid() {
		rankingGrid.push(<div className="rank-row s-tier">{cellCollectionSTier}</div>);
		rankingGrid.push(<div className="rank-row a-tier">{cellCollectionATier}</div>);
		rankingGrid.push(<div className="rank-row b-tier">{cellCollectionBTier}</div>);
		rankingGrid.push(<div className="rank-row c-tier">{cellCollectionCTier}</div>);
		rankingGrid.push(<div className="rank-row d-tier">{cellCollectionDTier}</div>);
		rankingGrid.push(<div className="rank-row f-tier">{cellCollectionFTier}</div>);
		rankingGrid.push(<div className="rank-row u-tier">{cellCollectionUTier}</div>);

		return rankingGrid;
	}

	function createRankingGrid() {
		createCellsForRows();
		return createRowsForGrid();
	}

	return (
		<div className="rankings">
			{createRankingGrid()}
		</div>
		)
}

export default RankingGrid;