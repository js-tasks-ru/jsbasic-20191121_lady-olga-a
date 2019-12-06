/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let someUsers = data.filter(item => item.age <= age);
  let arr = someUsers.map(item => item.name + ', ' + item.balance);
  return arr.join('\n');
}
