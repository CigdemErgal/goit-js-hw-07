const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
  //her yazı yazldığında bana haber ver.inputEl.value kull.yazdığı şey.
  console.log(inputEl.value);
});

inputEl.addEventListener("input", () => {
  outputEl.textContent = inputEl.value;
});

//eğer kullanıcı herşeyi silerse; boşsa "Anonymous" yazsın. doluysa yazdığı şeyi göstersin.
inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = inputEl.value;
  }
});
