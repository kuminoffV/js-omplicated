"use strict";

let strTrans, abbreviatedText;

const stringReduction = function (str) {

    if (typeof (str) !== "string") {
        return (TypeError('Введена не строка'));
    }
    strTrans = str.trim();
    strTrans.length > 30 ? abbreviatedText = str.trim().substring(0, 29) + "..." : abbreviatedText = str.trim(); 
    return abbreviatedText;
};

console.log(stringReduction(prompt('Введите какую-нибудь строку')));