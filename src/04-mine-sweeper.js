function minesCount(m, i, j) {
  let sum = 0;
  for (let i1 = (i === 0 ? 0 : i - 1); i1 <= (i === m.length - 1 ? i : i + 1); i1++) {
    for (let j1 = (j === 0 ? 0 : j - 1); j1 <= (j === m[0].length - 1 ? j : j + 1); j1++) {
      sum += m[i1][j1];
    }
  }
  return sum - m[i][j];
}
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} m
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  const r = [];
  for (let i = 0; i < m.length; i++) {
    r[i] = [];
    for (let j = 0; j < m[0].length; j++) {
      r[i][j] = minesCount(m, i, j);
    }
  }
  return r;
}
module.exports = minesweeper;
