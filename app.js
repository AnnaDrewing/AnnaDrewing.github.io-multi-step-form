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
const tileList = document.getElementsByClassName(".tile");
console.log(tileList);
const tile1 = document.getElementById("#tile-1");
console.log(tile1);

for (let i = 0; i < tiles.length; i++) {
  console.log("WOAH");
  if (i % 2 == 0) {
    console.log("YAY");
    tiles[i].classList.remove("tile");
    tiles[i].classList.add("vanishTile");
  }
}
