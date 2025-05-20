// for the slideshow
let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("square");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3500); // Change image every 3.5 seconds
        }
// Menu dropdowns
// Add classes for mobile navigation toggling
     var CSbody = document.querySelector("body");
        const CSnavbarMenu = document.querySelector("#cs-navigation");
        const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
        const csUL = document.querySelector('#cs-expanded');

        CShamburgerMenu.addEventListener('click', function() {
            CShamburgerMenu.classList.toggle("cs-active");
            CSnavbarMenu.classList.toggle("cs-active");
            CSbody.classList.toggle("cs-open");
        });
        // Mobile nav dropdown toggle
        const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
        const trigger = item.querySelector('.cs-dropdown-toggle'); 
        trigger.addEventListener('click', function() {
            item.classList.toggle('cs-active');
        });
}
// fancybox gallery
Fancybox.bind('[data-fancybox="gallery-container"]', {
        focus: false,
      }); 