"use strict";

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = new Date().getDay();
let today = week[day];

const weekList = function (arr) {
    for (let key of arr) {

        if (key === 'Суббота' || key === 'Воскресенье') {
            document.writeln(`<p><i>${key}</i></p>`);
        } else if (key === today) {
            document.writeln(`<p><b>${key}</b></p>`);
        } else {
            document.writeln(`<p>${key}</p>`);
        }
    }
}

weekList(week);