"use strict";

let today;
let hr;
let min;
let sec;

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

function getNewDay() {
    today = new Date();
    hr = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
};

function numstr(n, text_forms) {
    let m = Math.abs(n) % 100;
    let n1 = m % 10;
    if (m > 10 && m < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 === 1) {
        return text_forms[0];
    }
    return text_forms[2];
};

function addZero(num) {
    if (num.toString().length === 1) num = "0" + num;
    return num;
};

const timer = function () {
  getNewDay();
  today = `Сегодня ${today.toLocaleDateString('ru-RU', options)} ${hr} ${numstr(hr, [' час ', ' часа ', ' часов '])} ${min} ${numstr(min, [' минута ', ' минуты ', ' минут '])} ${sec} ${numstr(sec, [' секунда ', ' секунды ', ' секунд '])} <br/> ${today.toLocaleDateString('ru-RU')} - ${addZero(hr)}:${addZero(min)}:${addZero(sec)}`;
  document.body.innerHTML = today;
};

timer();
setInterval(timer, 1000);