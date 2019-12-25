/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  this.el = document.createElement('table');
  let thead = document.createElement('thead');	
  let tr = document.createElement('tr');
  for (let key in items[0]) {
    let td = document.createElement('td');  
    td.innerHTML = key;
    tr.appendChild(td);			
  }
  thead.appendChild(tr);
  this.el.appendChild(thead);
  let tbody = document.createElement('tbody');		
  for (let key in items) {
    let obj = items[key];
    let tr = document.createElement('tr');
    for (let ob in obj) {
      let td = document.createElement('td');
      td.innerHTML = obj[ob];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);	  
  }
  this.el.appendChild(tbody);	  
  let typeSort = ['text', 'numeric', 'numeric', 'text'];
  this.sort = (column, desc = false) => {
    let sortedRows = Array.from(this.el.rows).slice(1).sort((a, b) => (typeSort[column] === 'text' ? a.cells[column].innerHTML > b.cells[column].innerHTML : a.cells[column].innerHTML - b.cells[column].innerHTML));
    if (desc === true) {
      sortedRows.reverse();
    }
    tbody.append(...sortedRows);
  };
}