"use strict";

let strTrans;

const stringReduction = function (str) {

    if (typeof (str) !== "string") {
        return (TypeError('Введена не строка'));
    }
    strTrans = str.trim();
    strTrans.length > 30 ? strTrans = str.trim().substring(0, 29) + "..." : strTrans = str.trim(); 
    return strTrans;
};

console.log(stringReduction(prompt('Введите какую-нибудь строку')));