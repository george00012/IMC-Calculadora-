window.onload = inicio;

function inicio() {
   document.querySelector(".calcular").onclick = calcular;
   document.querySelector(".reset").onclick = resetear;
}

function calcular() {
   let altura = document.querySelector(".altura").value;
   let peso = document.querySelector(".peso").value;
   let resultado = document.querySelector(".resultado");

   if ((altura === '') || (altura < 0) || (isNaN(altura))) {
      resultado.innerHTML = "Por favor pon tu altura"
   } else if ((peso === '') || (peso < 0) || (isNaN(peso))) {
      resultado.innerHTML = "Por favor pon tu peso"
   } else {
      imc = (peso / ((altura * altura) / 10000)).toFixed(2);
      /* resultado.innerHTML = `<span>${imc}</span>`;*/

      if (imc < 18.6) {
         resultado.innerHTML = `Tu IMC es ${imc} y es inferior al normal`;
      } else if (imc > 18.6 && imc < 24.9) {
         resultado.innerHTML = `Tu IMC es ${imc} y es normal`;
      } else if (imc > 24.9) {
         resultado.innerHTML = `Tu IMC es ${imc} y es superior al normal`;
      }
   }

}

function resetear() {
   document.querySelector(".altura").value ="";
   document.querySelector(".peso").value="";
   document.querySelector(".resultado").innerHTML="";
}






