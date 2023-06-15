/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// ------------------------

const button = document.querySelector("button");
const form = document.querySelector("form");
const respuesta = document.querySelector(".respuesta");
const consumo_small = 5.23;
const consumo_medium = 6.7;
const consumo_big = 8.39;
let consumoLitros = 0;

form.addEventListener('submit', (event) =>{
    event.preventDefault();
});

button.addEventListener('click', function(){
    if(checkNull()){
        alert("Llene todos los campos");
        return;
    } else{
        let distancia = document.querySelector("#distance");
        let tipoFuel = document.querySelector("#fuelType");
        let carSize = document.querySelector('input[name="size"]:checked');
        let co2Emisiones = 0;
        if(carSize.value == "small"){
            consumoLitros = (distancia.value * consumo_small)/100;
        } else if (carSize.value == "medium"){  
            consumoLitros = (distancia.value * consumo_medium)/100;
        } else {
            consumoLitros = (distancia.value*consumo_big)/100;
        }
        if(tipoFuel.value == "diesel"){
            co2Emisiones = consumoLitros * 0.835 * 2.68;
        } else {
            co2Emisiones = consumoLitros * 0.74  * 2.31;
        }
        respuesta.textContent =  Math.round(co2Emisiones * 100) / 100;
    }
});

function checkNull(){
    let distancia = document.querySelector("#distance");
    let tipoFuel = document.querySelector("#fuelType");
    let carSize = document.querySelector('input[name="size"]:checked');
    if(distancia == null || tipoFuel == null || carSize == null){
        return true;
    } else {
        return false;
    }
}
