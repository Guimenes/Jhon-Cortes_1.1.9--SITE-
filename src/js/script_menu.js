document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuHorizontal = document.querySelector('.menu-horizontal');
    const menuLinks = document.querySelectorAll('.menu-horizontal a');

    // Toggle menu hamburguer
    hamburger.addEventListener('click', function() {
        menuHorizontal.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Close menu on link click
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuHorizontal.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });
});
