/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let obb = {};
  if (obj === null) {
    return obj;
  }
  for (let key in obj) {
    if (typeof obj[key] === null) {
      obb[key] = obj[key];
    } else {
      if (typeof obj[key] === 'object') {
        obb[key] = clone(obj[key]);
      } else {
        obb[key] = obj[key];
      }  
    }
  }
  return obb;
}
