/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    if (row.cells[2].innerHTML === 'f') {
      row.classList.add('female');
    }
    if (row.cells[2].innerHTML === 'm') {
      row.classList.add('male');
    }
    if (row.cells[3].dataset.available === 'true') {
      row.classList.add('available');
    }
    if (row.cells[3].dataset.available === 'false') {
      row.classList.add('unavailable');
    } 
    if (row.cells[3].dataset.available === undefined) {
      row.hidden = true;
    } 
    if (+row.cells[1].innerHTML < 18) {
      row.style = 'text-decoration: line-through';
    }  
  }
}
