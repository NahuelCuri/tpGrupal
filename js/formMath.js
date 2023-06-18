const button = document.querySelector(".calcular");
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
    console.log("btn click")
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