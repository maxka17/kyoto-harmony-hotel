// Hamburger menu
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const navLinks = document.querySelectorAll('#main-navigation a');

menuToggle.addEventListener('click', function() {
    const isOpen = navigation.classList.toggle('open');
    //Uppdatera aria-expanded för skärmläsare
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Stäng menyn när man klickar på en länk på mobilen
navLinks.forEach( link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

