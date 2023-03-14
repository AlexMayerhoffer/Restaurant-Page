import GenshinData from "genshin-data";

const genshinData = new GenshinData();


// Async/await
const characters = await genshinData.food();
console.log(characters);