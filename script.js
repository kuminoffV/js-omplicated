'use strict';

const week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье',];
let day = new Date().getDay() - 1;
let today = week[day];
console.log(`today ${today}`);

const weekList = function (arr) {
     for (let key of arr) {
          switch (true) {
               case (key === "Суббота" || key === "Воскресенье") && key === today:
                    document.writeln(`<p><i><b>${key}</b></i></p>`);
                    break;
               case key === "Суббота" || key === "Воскресенье":
                    document.writeln(`<p><i>${key}</i></p>`);
                    break;
               case key === today:
                    document.writeln(`<p><b>${key}</b></p>`);
                    break;
               default:
                    document.writeln(`<p>${key}</p>`);
                    break;
          }
     }
};
weekList(week);