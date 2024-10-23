let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
// ===================================================================
// Wait for the DOM to load

document.addEventListener("DOMContentLoaded", function() {
    const serviceLink = document.getElementById("service-link");
    const servicesSection = document.getElementById("services");
    serviceLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        servicesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceLink = document.getElementById("about-link");
    const servicesSection = document.getElementById("abouts");
    serviceLink.addEventListener("click", function(event) {
        event.preventDefault();
        servicesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceLink = document.getElementById("doctor-link");
    const servicesSection = document.getElementById("docttor");
    serviceLink.addEventListener("click", function(event) {
        event.preventDefault();
        servicesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceLink = document.getElementById("home-link");
    const servicesSection = document.getElementById("hoome");
    serviceLink.addEventListener("click", function(event) {
        event.preventDefault();
        servicesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});