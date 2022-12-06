"use strict";

const stringReduction = function (str) {

    if (typeof (str) !== "string") {
        alert('Вы ввели не строку, пожалуйста, напишите строку');
        return;
    }

    let strTrans = str.trim();

    if (strTrans.length > 30) {
        console.log(strTrans.substring(0, 29) + "...");
    } else {
        console.log(strTrans);
    }
};

stringReduction(prompt('Введите какую-нибудь строку'));