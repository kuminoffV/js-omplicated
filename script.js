let lang = prompt('Какой язык выбираете? (ru/en)');
const weekDaysRu = "Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье";
const weekDaysEn = "Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday"; 
const langArr = [];

// первый способ
if (lang === "ru") {
    console.log(weekDaysRu);
} else if (lang === "en"){
    console.log(weekDaysEn);
} else {
  alert("Упс. Вы написали что-то не то...");
}

// второй способ
switch (true) {
    case lang === "ru":
        console.log(weekDaysRu);
    break;
  case lang === "en":
        console.log(weekDaysEn);
        break;
    default:
        alert("Упс. Вы написали что-то не то...");
}

// третий способ
langArr['ru'] = weekDaysRu.split("\n");
langArr['en'] = weekDaysEn.split("\n");
console.log(langArr[lang]);

let namePerson = prompt("Введите имя (Артём, Александр или другие)");
namePerson === "Артём" ? console.log(namePerson + " - директор") : namePerson === "Александр" ? console.log(namePerson + " - преподаватель") : console.log(namePerson + " - студент");
