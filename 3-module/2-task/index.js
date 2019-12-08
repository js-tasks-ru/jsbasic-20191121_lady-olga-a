/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(' ');
  let arrNew = [];
  let arr2 = [];
  for (key in arr) {
    if (arr[key].indexOf(',') > 0) {
      arr2 = arr[key].split(',');
      arrNew = arr.concat(arr2);
    } else {
      arrNew.push(arr[key]);
    }
  }  
  let arr1 = arrNew.filter(item => isFinite(item));
  arr1.sort((a, b) => a - b);
  return {min: +arr1[0], max: +arr1[arr1.length - 1]};
}
