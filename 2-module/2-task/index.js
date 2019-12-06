/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'undefined') {
      return false;
    }    
    if (obj[key]) {
      return false;
    } 
  }
  return true;
}
