// When button is clicked alert your name
document
  .getElementById("special-btn")
  .addEventListener("click", (eventObject) => {
    changeColor(eventObject);
  });

document
  .getElementById("user-input-form")
  .addEventListener("submit", (eventObject) => {
    // preventing default behavior of submit in a form
    eventObject.preventDefault();

    createBtn(document.getElementById("user_input").value);

    // document.getElementById("user_input").value = ""
    document.getElementById("user-input-form").reset();
  });

document.getElementById("btns_container").addEventListener("click", (e) => {
  // if (e.target.tagName === "BUTTON") {
  //   changeColor(e);
  // }

  if (e.target.classList.contains("special")) {
    changeColor(e);
  }
});

function getRandomHexColor() {
  let hexChars = "0123456789ABCDEF";

  let randomColor = "#";

  for (let index = 0; index < 6; index++) {
    let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);

    let randomHexChar = hexChars[randomHexCharIdx];

    randomColor += randomHexChar;
  }

  return randomColor;
}

function createBtn(userInput) {
  // Use the text to create a button
  //  <button id=""></button>
  const newBtn = document.createElement("button");
  newBtn.innerText = userInput;
  // newBtn.setAttribute("class", "special box");
  newBtn.classList.add("special", "box");

  // Put the new button inside of #btns_container
  document.getElementById("btns_container").appendChild(newBtn);
}

function changeColor(e) {
  //   change the body's background color using the given function
  e.target.style.backgroundColor = getRandomHexColor();

  document.body.style.backgroundColor = getRandomHexColor();
}
