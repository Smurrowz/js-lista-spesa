const ListaDellaSpesa = [
  "mele",
  "banane",
  "pere",
  "biscotti",
  "pomodori",
  "pasta",
  "formaggio",
  "pollo",
  "uova",
]
console.log(ListaDellaSpesa)
let ulElement = document.getElementById('listaspesa')

for(i = 0; i < ListaDellaSpesa.length; i++) {
  const quantita = (Math.floor(Math.random () * 5 ) + 1) + " kg"
  ulElement.innerHTML += 
  ` <li>${ ListaDellaSpesa[i] } - ${ quantita }</li>
  `
}
// let i = 0
// while (i < ListaDellaSpesa.length){
//   const quantita = (Math.floor(Math.random () * 5 ) + 1) + " kg"
//   ulElement.innerHTML += 
//   ` <li>${ ListaDellaSpesa[i] } - ${ quantita }</li>
//   `
//   i++
// }