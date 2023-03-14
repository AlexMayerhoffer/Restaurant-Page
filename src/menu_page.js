import {dish_card_list} from "./card_generator";


export function menu_page() {
  const menu_content_wrapper = document.createElement('div');
  menu_content_wrapper.classList.add('menu_content_wrapper');
  menu_content_wrapper.classList.add('wrapper');

  const menu_content = document.createElement('div');
  menu_content.id = 'menu_content';

  const dish_list_container = document.createElement('div');
  dish_list_container.classList.add('dish_list_container');
  dish_list_container.id = 'dish_list_container';

  const dish_info_container = document.createElement('div');
  dish_info_container.classList.add('dish_info_container');

  const info_dish_name = document.createElement('div');
  info_dish_name.classList.add('info_dish_name');
  const dish_name = document.createElement('h3');

  info_dish_name.appendChild(dish_name);

  const info_dish_image_wrapper = document.createElement('div');
  info_dish_image_wrapper.classList.add('info_dish_image_wrapper');

  const img_dish = document.createElement('img');
  const img_stars = document.createElement('img');

  info_dish_image_wrapper.appendChild(img_dish);
  info_dish_image_wrapper.appendChild(img_stars);

  const info_dish_detail_wrapper = document.createElement('div');
  const dish_info = document.createElement('p');

  info_dish_detail_wrapper.appendChild(dish_info);


  dish_info_container.appendChild(info_dish_name);
  dish_info_container.appendChild(info_dish_image_wrapper);
  dish_info_container.appendChild(info_dish_detail_wrapper);

  menu_content.appendChild(dish_list_container);
  menu_content.appendChild(dish_info_container);

  menu_content_wrapper.appendChild(menu_content);

    dish_card_list().then(cards => cards.forEach(card => {
        dish_list_container.appendChild(card)
    }));

  return menu_content_wrapper;

}