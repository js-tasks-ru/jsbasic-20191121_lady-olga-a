/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    let title = ['name', 'age', 'salary', 'City', ''];
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');	
    for (let elem of title) {
      let td = document.createElement('td');  
      td.innerHTML = elem;
      tr.appendChild(td);	
    }
    thead.appendChild(tr);
    this.el.appendChild(thead);		
    let tbody = document.createElement('tbody');
    for (let key of this.data) {
      let tr = document.createElement('tr');
      let oneRec = key;
      let idRec = '';		
      for (let keyRec in oneRec) {
        if (keyRec === 'id') {
          idRec = oneRec[keyRec];
          continue;
        }
        let td = document.createElement('td');	
        td.innerHTML = oneRec[keyRec];
        tr.appendChild(td);  
      }
      let td = document.createElement('td');	
      let a = document.createElement('a');
      a.innerHTML = 'X';
      a.setAttribute('href', '#delete');
      a.setAttribute('data-idrec', idRec);
      td.appendChild(a);
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    this.el.appendChild(tbody);	
    this.el.classList.add('pure-table');
    this.el.addEventListener('click', event => this.handler(event));  
  }
  handler(event) {
    let target = event.target;
    if (target.hasAttribute('data-idrec')) {
      let id = +target.getAttribute('data-idrec');
      let elem = target.closest('tr');
      elem.remove();
      this.onRemoved(id);
    }
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);      
  }
}

window.ClearedTable = ClearedTable;
