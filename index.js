
function removeOrphanVertices(cells, positions) {
  var newPositions = [];
  var indexLookup = {};

  var newCells = cells.map(function(cell) {
    return cell.map(function(index) {
      if(indexLookup[index] === undefined) {
        indexLookup[index] = newPositions.length;
        newPositions.push(positions[index]);
      }
      return indexLookup[index];
    });
  });

  return {
    cells: newCells,
    positions: newPositions
  };
}

module.exports = removeOrphanVertices;