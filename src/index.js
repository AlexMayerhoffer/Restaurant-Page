
import { header_bar } from "./header_bar";
import { home_page } from "./home_page";
import { menu_page } from "./menu_page";
import { about_page } from "./about_page";

document.body.appendChild(header_bar());
document.body.appendChild(home_page());

const buttons= document.getElementsByClassName('header_button');
let btn_list = [...buttons];

function enableAllHeaderButtons() {
  btn_list[0].disabled = false;
  btn_list[1].disabled = false;
  btn_list[2].disabled = false;
}

btn_list[0].addEventListener('click', (e) => {
  document.body.removeChild(document.body.getElementsByClassName('wrapper')[0]);
  document.body.appendChild(home_page());
  enableAllHeaderButtons();
  e.target.disabled = true;
});

btn_list[1].addEventListener('click', (e) => {
  document.body.removeChild(document.body.getElementsByClassName('wrapper')[0]);
  document.body.appendChild(menu_page());
  enableAllHeaderButtons();
  e.target.disabled = true;
})

btn_list[2].addEventListener('click', (e) => {
  document.body.removeChild(document.body.getElementsByClassName('wrapper')[0]);
  document.body.appendChild(about_page());
  enableAllHeaderButtons();
  e.target.disabled = true;
})


