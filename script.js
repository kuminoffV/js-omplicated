'use strict'; 

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const today = (6 + new Date().getDay()) % 7;

week.forEach((day, index) => {
  let str = day;
    
  today === index && (str = `<b>${str}</b>`);
  index > 4 && (str = `<i>${str}</i>`);
    
  document.body.insertAdjacentHTML('beforeend', `<p>${str}</p>`);
}); 