import GenshinData from "genshin-data";

const genshinData = new GenshinData();


// Async/await
const characters = await genshinData.potions();
console.log(characters);