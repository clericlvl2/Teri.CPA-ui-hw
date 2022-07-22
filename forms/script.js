function showEvenNames () {
  let forms = document.querySelectorAll('.content__form');
  let textField = document.getElementById('even-forms');
  for (let i = 1; i < forms.length; i+=2) {
    textField.innerHTML += forms[i].name + ' ';
  }
}
showEvenNames();

let buttonsShowName = document.querySelectorAll('.show-form-name');
let buttonsShowId = document.querySelectorAll('.host-form');
let buttonsClear = document.querySelectorAll('.clear-form');
let buttonsShowInputs = document.querySelectorAll('.show-input-num');

for (let button of buttonsShowName) {
  button.addEventListener('click', () =>
    alert(button.parentElement.parentElement.name))
}
for (let button of buttonsShowId) {
  button.addEventListener('click', () =>
    alert(button.parentElement.parentElement.id))
}
for (let button of buttonsClear) {
  button.addEventListener('click', () =>
    button.parentElement.parentElement.reset())
}
// Без учёта 4 кнопок
for (let button of buttonsShowInputs) {
  button.addEventListener('click', () =>
   alert(button.parentElement.parentElement.querySelectorAll('input').length-4))
}

