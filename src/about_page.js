import "./about_page.css"

export function about_page() {
  const main = document.createElement('div');
  main.id = "about_wrapper";
  main.classList.add('wrapper');

  const content_wrapper = document.createElement('div');
  content_wrapper.classList.add('content_wrapper');

  const title = document.createElement('h2');
  title.innerHTML = 'The Odin Project - Restaurant Page';

  const author = document.createElement('h3');
  author.innerHTML = 'Made by <a href="https://github.com/AlexMayerhoffer">Mayerhoffer Otto-Alexandru</a>';

  const copyright = document.createElement('p');
  copyright.innerHTML = 'Made for educational purposes. All assets used are owned by HoYoverse';

  content_wrapper.appendChild(title);
  content_wrapper.appendChild(author);
  content_wrapper.appendChild(copyright);

  main.appendChild(content_wrapper);

  return main;
}