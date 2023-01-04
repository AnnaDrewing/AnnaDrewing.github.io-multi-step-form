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
console.log(tiles);
const steps = document.querySelectorAll(".step");

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
  tiles.forEach((tile) => {
    tile.classList.add("vanishTile");
    tile.classList.remove("tile");
  });
  tiles[tileNr].classList.remove("vanishTile");
  tiles[tileNr].classList.add("tile");
}
