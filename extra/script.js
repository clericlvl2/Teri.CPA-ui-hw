//Создайте динамически таблицу, в которой в первой колонке будет уникальный текст ссылки, во второй колонке количество ссылок, в третьей колонке куда ведут эти ссылки (аттрибут href) через запятую.

let linkCollection = document.querySelectorAll('.link');
let linkDataArray = Array.prototype.map.call(linkCollection, ( val ) => [val.innerHTML,val.href]);

// массивы, где будут данные столбцов
let tableName = [];
let tableNumber = [];
let tableUrl = [];

for (let link of linkDataArray) {
  let name = link[0];
  let url = link[1];
  let hasName = false;
  // проверяю есть ли такое имя, дополняю счетчк и ссылку
  for (let i = 0; i < tableName.length; i++) {
    if (tableName[i] === name) {
      hasName = true;
      tableNumber[i] += 1;
      tableUrl[i].push(url);
      break;
    }
  }
  // в случае если имени нет, добавляю новое имя
  if (!hasName) {
    tableName.push (name)
    tableNumber.push (1);
    tableUrl.push([url]);
  }
}
// создание таблицы
function generateTable() {
  // создать скелет
  const tbl = document.createElement("table");
  const columnNum = 3;
  const rowNum = tableName.length;
  // наролнить скелет
  for (let i = -1; i < rowNum; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columnNum; j++) {
      let temp = 'empty';
      // задаю header
      if(i === -1) {
        switch(j) {
          case 0:  // if (x === 'value1')
            temp = 'Link Name';
            break;
          case 1:  // if (x === 'value2')
            temp = 'Link Count';
            break;
          case 2:  // if (x === 'value2')
            temp = 'Link URL';
            break;
        }
        const cellText = document.createTextNode(temp.toString());
        const cell = document.createElement("th");
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.classList.add('row-header')
      }
      // задаю данные таблицы
      else {
        switch(j) {
          case 0:  // if (x === 'value1')
            temp = tableName[i];
            break;
          case 1:  // if (x === 'value2')
            temp = tableNumber[i];
            break;
          case 2:  // if (x === 'value2')
            temp = tableUrl[i];
            break;
        }
        const cellText = document.createTextNode(temp.toString());
        const cell = document.createElement("td");
        cell.appendChild(cellText);
        row.appendChild(cell);
        row.classList.add('row-data')
      }
    }
    tbl.appendChild(row);
    tbl.classList.add('table')
  }
  document.querySelector('.table-container').appendChild(tbl);
}
generateTable();
