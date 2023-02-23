

export function home_page() {
  const main = document.createElement('div');
  main.classList.add('wrapper');
	main.id = "menu_wrapper";


	const menu_border_left = document.createElement('div');
	menu_border_left.classList.add('menu_border', 'menu_left');

	const menu_border_right = document.createElement('div');
	menu_border_right.classList.add('menu_border', 'menu_right');

	const menu_content = document.createElement('div');
	menu_content.classList.add('menu_content');

	const main_p = document.createElement('p');
	main_p.innerHTML += "A famous restaurant known in Chihu Rock. Some say that the goal of this restaurant is to keep everyone on earth well fed, while others believe that it strives to unify all the regional cuisines of the world. Either way, with its unique dishes, Wanmin Restaurant is surely a place worth visiting. If you really don't have time, why not grab some takeout?";
	menu_content.appendChild(main_p);

	const img_left_1 = document.createElement('img');
	img_left_1.src = "../assets/dish1.png";

	const img_left_2 = document.createElement('img');
	img_left_2.src = "../assets/dish2.png";

	menu_border_left.appendChild(img_left_1);
	menu_border_left.appendChild(img_left_2);

	const img_right_1 = document.createElement('img');
	img_right_1.src = "../assets/dish3.png";

	menu_border_right.appendChild(img_right_1);

	main.appendChild(menu_border_left);
	main.appendChild(menu_content);
	main.appendChild(menu_border_right);

  return main;
}