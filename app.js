const tiles = document.querySelectorAll(".tile");
console.log(tiles);
const steps = document.querySelectorAll(".step");
const stepIcons = document.querySelectorAll(".step-icon");
let userData = {
  name: "e.g. Stephen King",
  email: "e.g. stephenking@lorem.com",
  phoneNr: "e.g. +1 234 567 890",
  plan: "arcade",
  billing: "monthly",
  onlineServices: "yes",
  largerStorage: "yes",
  customizableProfile: "no",
};

applyPlaceholderUserData();
activateButtons();

function activateButtons() {
  const nextStepButtons = document.querySelectorAll(".nextStep");
  for (const [index, button] of nextStepButtons.entries()) {
    button.addEventListener("click", () => {
      if (index < 3) {
        showTile(index + 1);
      }
    });
  }
  const goBackButtons = document.querySelectorAll(".goBack");
  console.log(goBackButtons);
  for (const [index, button] of goBackButtons.entries()) {
    button.addEventListener("click", () => {
      if (index > 0 && index < 4) {
        showTile(index - 1);
      }
    });
  }
  const confirmButton = document.getElementById("confirm");
  confirmButton.addEventListener("click", () => {
    showTile(4);
  });
}

function applyPlaceholderUserData() {
  let name = document.getElementById("name");
  name.addEventListener("click", () => {
    clearField(name);
  });
  name.addEventListener("change", () => {
    applyUserInput(name);
    console.log("New user data:" + userData.name);
    console.log(userData);
  });

  let email = document.getElementById("email");
  email.addEventListener("click", () => {
    clearField(email);
  });
  email.addEventListener("change", () => {
    applyUserInput(email);
    console.log("New user data:" + userData.email);
    console.log(userData);
  });
  let phoneNr = document.getElementById("phoneNr");
  phoneNr.addEventListener("click", () => {
    clearField(data);
  });
  phoneNr.addEventListener("change", () => {
    applyUserInput(data);
    console.log("New user data:" + userData.phoneNr);
    console.log(userData);
  });

  let dataList = [name, email, phoneNr];
  for (data of dataList) {
    data.value = userData[data.name];
    data.classList.add("placeholderText");
  }
}

function clearField(inputField) {
  if (inputField.classList.contains("placeholderText")) {
    inputField.classList.remove("placeholderText");
    inputField.value = "";
  }
}

function applyUserInput(inputField) {
  userData[inputField.name] = inputField.value;
}

for (const [index, step] of steps.entries()) {
  step.addEventListener("click", () => {
    showTile(index);
  });
}

for (const [index, tile] of tiles.entries()) {
  if (index > 0) {
    tile.classList.remove("tile");
    tile.classList.add("vanishTile");
  }
}

function showTile(tileNr) {
  stepIcons.forEach((icon) => {
    if (icon.classList.contains("step-icon-active")) {
      icon.classList.remove("step-icon-active");
    }
  });
  tiles.forEach((tile) => {
    tile.classList.add("vanishTile");
    tile.classList.remove("tile");
  });
  if (tileNr < 4) {
    stepIcons[tileNr].classList.add("step-icon-active");
  }
  tiles[tileNr].classList.remove("vanishTile");
  tiles[tileNr].classList.add("tile");
}
