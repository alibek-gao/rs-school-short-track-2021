/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const o1 = {};
  let common = 0;
  s1.split('').forEach((c) => {
    o1[c] = (o1[c] || 0) + 1;
  });
  s2.split('').forEach((c) => {
    if (o1[c] || 0) {
      common++;
      o1[c]--;
    }
  });
  return common;
}

module.exports = getCommonCharacterCount;
