
export function header_bar() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = "../assets/logo.webp";
  logo.alt = "A Wanmin Welcome";

  const home_btn = document.createElement('button');
  home_btn.id = "home_button";
  home_btn.classList.add('header_button');
  home_btn.innerHTML = "Home";
  home_btn.disabled = true;

  const menu_btn = document.createElement('button');
  menu_btn.id = "menu_button";
  menu_btn.classList.add('header_button');
  menu_btn.innerHTML = "Menu";

  const about_btn = document.createElement('button');
  about_btn.id = "about_button";
  about_btn.classList.add("header_button");
  about_btn.innerHTML = "About";

  header.appendChild(logo);
  header.appendChild(home_btn);
  header.appendChild(menu_btn);
  header.appendChild(about_btn);

  return header;
}