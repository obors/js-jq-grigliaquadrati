// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

var randome = [];



$(".square").each(function (){
  var number = generaRandom(0, 10);
  console.log(number)

})

  // $(this).click(function (){
  //   console.log("ciao")
  // });







function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
}
