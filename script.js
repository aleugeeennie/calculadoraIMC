/*JS*/
const formIMC = document.getElementById("formIMC");

//Creamos el párrafo donde va a ir el resultado 
const row = document.querySelector(".row"); 
const resultado = document.createElement("div"); 
const parrafo = document.createElement("p"); 
resultado.classList.add("resultado"); 
row.appendChild(resultado);
resultado.appendChild(parrafo); 


//Llamar al evento
formIMC.addEventListener("submit", obtenerIMC); 

//Función obtener IMC
function obtenerIMC(e){
    e.preventDefault(); 
    //Llamamos los inputs desde el html 
    const inptPeso = document.getElementById("inptPeso"); 
    const inptAltura = document.getElementById("inptAltura");

    //Guardamos los valores de los inputs en variables 
    let peso = Number(inptPeso.value); 
    let altura = Number(inptAltura.value); 

    if(peso == "" || altura  == "" ){
        alert("No puede enviar el formulario vacìo"); 
    } else {
        operacion(altura, peso); 
       inptPeso.value = "" 
       inptAltura.value = ""; 
    }

}


function operacion(altura, peso){
      //Convierte la altura en metros
      const convertirMetros = altura/100; 
      // Eleva la altura al cuadrado
          const alturaCuadrado = Math.pow(convertirMetros, 2); 
      //Obtener el IMC
          const IMC = peso/alturaCuadrado; 
          resultado.style.display = "block";
          parrafo.textContent = `Peso: ${peso}. Altura: ${convertirMetros} m². IMC: ${IMC.toFixed(2)};` 
          return parrafo;
}

const btnReset = document.getElementById("btnReset"); 
btnReset.addEventListener("click", limpiar); 

function limpiar(){
    location.reload()
}