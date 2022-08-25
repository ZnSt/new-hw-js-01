const refs = {
  inputSizeControl: document.querySelector("#font-size-control"),
  spanSizeControl: document.querySelector("#text"),
};

refs.inputSizeControl.addEventListener("input", onInputFn);

function onInputFn(event) {
  refs.spanSizeControl.style.fontSize = event.currentTarget.value + "px";
}

// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова

function printContactsInfo(names = "", phones = "") {
  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
  }
}

printContactsInfo(
  "Jacob, William, Solomon, Artemis",
  "8900012345, 8976463721, 0987654321, 1234567891"
);

const obj = {};
console.log(obj);
