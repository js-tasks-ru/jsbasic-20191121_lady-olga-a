/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
let x = prompt('Число x, которое возводим в степень:', 0);
let n = prompt('Степень n, в которую возводим (больше 1):', 1);
if ((n < 1) || (n % 1 != 0) || !isFinite(x)) {
  alert('основание должно быть число,  степень - целое число больше 1');
} else {
  alert(pow(x, n));
}
function pow(m, n) {
  let result = m;
  for (i = 1; i < n; i++) {
    result = result * m;
  }
  return result;
}
