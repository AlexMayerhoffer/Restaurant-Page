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
  info_dish_name.id = 'info_dish_name_bg';
  const dish_name = document.createElement('h3');
  dish_name.id = 'info_dish_name';

  info_dish_name.appendChild(dish_name);

  const info_dish_image_wrapper = document.createElement('div');
  info_dish_image_wrapper.id = 'info_dish_image_wrapper';
  info_dish_image_wrapper.classList.add('info_dish_image_wrapper');

  const img_dish = document.createElement('img');
  img_dish.id = 'info_img_dish';
  const img_stars = document.createElement('img');
  img_stars.id = 'info_img_stars';

  info_dish_image_wrapper.appendChild(img_dish);
  info_dish_image_wrapper.appendChild(img_stars);

  const info_dish_detail_wrapper = document.createElement('div');
  info_dish_detail_wrapper.classList.add('info_dish_detail_wrapper');
  const dish_info = document.createElement('p');
  dish_info.id = 'info_dish_description';

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