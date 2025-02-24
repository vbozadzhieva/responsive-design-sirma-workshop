function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    burgerMenuElement.addEventListener('click', onBurgerMenuClick);

    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    mobileMediaQuery.addEventListener('change', onMediaChange);
}

// reset burger menu and nav on media change
function onMediaChange() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navContainerElement = document.querySelector('.nav-container');

    navContainerElement.style.display = '';
    burgerMenuElement.classList.replace('close-menu', 'open-menu');
}

function onBurgerMenuClick() {
    const navContainerElement = document.querySelector('.nav-container');
    const burgerMenuElement = document.querySelector('.burger-menu');

    // toggle burger menu icon and navigation
    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
        navContainerElement.style.display = 'block';
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
        navContainerElement.style.display = '';
    }
}

initEventListeners();