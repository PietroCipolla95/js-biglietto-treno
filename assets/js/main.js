/* 

DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.

*/

//prompt asking km

const km = Number(prompt('Quanti km dovrai percorrere?'))

 if (isNaN(km)) {

    alert('valore non valido')

} 

//prompt asking age of user

const age = Number(prompt('Quanti anni hai?'))

if (isNaN(age)) {

    alert('valore non valido')

}

//calcolo del biglietto

let price = (km * 0.21)
console.log(price);
document.getElementById('price').innerHTML = price + ' €'

//sales apply

if (age < 18) {

    price = Number(price * 0.8)
    document.getElementById('sales').innerHTML = (price.toFixed(2) + ' €')

} else if (age >= 65) {
    
    price = Number(price * 0.6)
    document.getElementById('sales').innerHTML = (price.toFixed(2) + ' €')
    
}  