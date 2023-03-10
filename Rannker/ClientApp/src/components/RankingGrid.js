
const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

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
			cellCollection.push(<div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
				{(item != null)
					? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} />
					: null}
			</div>);
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
		const numCells = 10; // mess with this

		for (var a = 1; a <= numCells; a++) {
			rankNum = (a === 1) ? 0 : (numCells * (rowNumber - 1)) + a - rowNumber;

			if (rowNumber === 1) {
				currCollection = cellCollectionSTier;
				label = "S";
			}
			else if (rowNumber === 2) {
				currCollection = cellCollectionATier;
				label = "A";
			}
			else if (rowNumber === 3) {
				currCollection = cellCollectionBTier;
				label = "B";
			}
			else if (rowNumber === 4) {
				currCollection = cellCollectionCTier;
				label = "C";
			}
			else if (rowNumber === 5) {
				currCollection = cellCollectionDTier;
				label = "D";
			}
			else if (rowNumber === 6) {
				currCollection = cellCollectionFTier;
				label = "F";
			}
			else if (rowNumber === 7) {
				currCollection = cellCollectionUTier;
				label = "U";
			}
			pushCellMarkupToArr(currCollection, rankNum, label);
		}
	}

	// Builds out each Row
	function createCellsForRows() {

		const maxRows = 7;

		for (var row = 1; row <= maxRows; row++) {
			createCellsForRow(row);
		}
	}

	// Build out each collection
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