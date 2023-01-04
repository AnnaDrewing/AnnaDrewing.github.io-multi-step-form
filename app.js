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

const tiles = document.querySelectorAll(".tile");
const steps = document.querySelectorAll(".step");

for (const [index, step] of steps.entries()) {
  step.addEventListener("click", () => {
    showTile(index);
  });
}

function showTile(tileNr) {
  tiles.forEach((tile) => {
    tile.classList.remove("vanishTile");
    tile.classList.add("tile");
  });
  tiles[tileNr].classList.remove("tile");
  tiles[tileNr].classList.add("vanishTile");
}
