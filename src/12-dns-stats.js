/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const m = domains.map((dom) => dom.split('.').reverse().reduce((a, c) => {
    const str = `${a}.${c}`;
    arr.push(str);
    return str;
  }, ''));
  const uni = [...new Set(arr)];
  const obj = {};
  uni.forEach((item) => {
    obj[item] = m.reduce((a, c) => a + c.includes(item), 0);
  });
  return obj;
}

module.exports = getDNSStats;
