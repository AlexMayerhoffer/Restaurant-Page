import GenshinData from "genshin-data";
import "./menu_page.css"
const genshinData = new GenshinData();


// Async/await
function getBgColor(rarity) {
    if (rarity === 1)
        return 'item_bg_gray';
    else if (rarity === 2)
        return 'item_bg_green';
    else if (rarity === 3)
        return 'item_bg_blue';
    else if (rarity === 4)
        return 'item_bg_purple';
    else if (rarity === 5)
        return 'item_bg_orange';
}

let currentSelected;

const updateCurrent = (dish) => {
    document.getElementById('info_dish_name').innerHTML = dish.name;
    document.getElementById('info_img_stars').src = `../assets/${dish.rarity}_star.png`
    document.getElementById('info_img_dish').src = '../assets/dish1.png';
    document.getElementById('info_dish_description').innerHTML = dish.description;
    document.getElementById('info_dish_image_wrapper').style.background = `url("../assets/${getBgColor(dish.rarity)}.png")`;
    document.getElementById('info_dish_name_bg').style.background = `url("../assets/1x/title_${getBgColor(dish.rarity)}.png")`
    document.getElementById('info_dish_name_bg').style.backgroundSize = '100% 100%';
}

const dish_card_list = async () => {
    const dish_array = await genshinData.food();
    updateCurrent(dish_array[0]);
    let card_list = dish_array.map(dish => {
        const dish_card = document.createElement('div');
        dish_card.classList.add('dish_card');

        const image_wrapper = document.createElement('div');
        image_wrapper.classList.add('image_wrapper');
        image_wrapper.style.background = `url("../assets/${getBgColor(dish.rarity)}.png")`
        image_wrapper.style.backgroundSize = '100% 100%';

        const img_dish = document.createElement('img');
        img_dish.src = "../assets/dish1.png";
        img_dish.alt = dish.id;

        const img_dish_stars = document.createElement('img');
        img_dish_stars.src = `../assets/${dish.rarity}_star.png`;
        img_dish_stars.alt = dish.rarity.toString();

        image_wrapper.appendChild(img_dish);
        image_wrapper.appendChild(img_dish_stars);

        const title = document.createElement('h1');
        title.innerHTML = dish.name;

        dish_card.appendChild(image_wrapper);
        dish_card.appendChild(title);
        dish_card.addEventListener('click', () => {
            currentSelected.classList.remove('dish_card_selected');
            currentSelected = dish_card;
            dish_card.classList.add('dish_card_selected');
            updateCurrent(dish);
        });
        return dish_card;
    })
    currentSelected = card_list[0];
    currentSelected.classList.add('dish_card_selected');

    return card_list;
}

export {dish_card_list}

