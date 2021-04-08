/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let char = '';
  let count = 0;
  str.split('').forEach((c) => {
    if (char !== c) {
      result += count > 1 ? count + char : char;
      char = c;
      count = 1;
    } else {
      count++;
    }
  });
  result += count > 1 ? count + char : char;
  return result;
}

module.exports = encodeLine;
