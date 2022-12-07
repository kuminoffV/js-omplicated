"use strict";

const arr = [204, 242, 415, 584, 124, 711, 777];

for (let i = 0; i < arr.length; i++) {
    let chr = arr[i].toString()[0];
    if (chr === '2' || chr === '4') {
        console.log(arr[i]);
    }
}

for (let i = 1; i < 101; i++) {
    for (let j = 2; j <= i; j++) {
        if ((i % j === 0) && (j < i)) {
            break;
        } else if (j === i) {
            console.log('Число ' + i + ', делители этого числа: 1 и ' + i);
            break;
        }
    }
}