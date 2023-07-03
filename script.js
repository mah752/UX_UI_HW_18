const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('show');
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.closest('.menu') && !target.closest('.burger')) {
    menu.classList.remove('show');
  }
});

$(document).ready(function() {
  function fade() {
    $(".preloader").fadeOut("slow");
  }
  setTimeout(fade, 3000);
});
