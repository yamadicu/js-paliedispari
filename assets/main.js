
//PRENDERE VALORI DAL HTML

let numero = parseInt(document.querySelector('#numero').value)

//FUNZIONE CHE PARTE AL CLICK DEL BOTTONE CONFERMA
pari.addEventListener('click', function(){
    
    numero = parseInt(document.querySelector('#numero').value)
    let randomNum = ranNum(5);

    randomNum = ranNum(5)
    console.log(numero)
    console.log(randomNum)

    let risultato = numero + randomNum

    if( risultato %2 == 0 ){
        console.log('hai vinto')
    }
    else{
        console.log('hai perso')
    }

})


dispari.addEventListener('click', function(){
    
    numero = parseInt(document.querySelector('#numero').value)
    let randomNum = ranNum(5);

    randomNum = ranNum(5)
    console.log(numero)
    console.log(randomNum)

    let risultato = numero + randomNum

    if( risultato %2 == 0 ){
        console.log('hai perso')
    }
    else{
        console.log('hai vinto')
    }

})

//RANDOMIZZARE UN NUMERO

function ranNum(max) {
  return Math.floor((Math.random() * max)+1);
}