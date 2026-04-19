document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.header__burger');
  const headerElement = document.querySelector('.header');

  if (burgerButton && headerElement) {
    burgerButton.addEventListener('click', () => {
      headerElement.classList.toggle('header--open'); 
    });
  }
});