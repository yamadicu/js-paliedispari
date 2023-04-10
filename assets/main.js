invia.addEventListener('click', function(){

    let parola = document.querySelector('#parola').value
    let parolaReverse = parolaGirata(parola);
    
    //FUNZIONE CHE RIBALTA LA PAROLA
    function parolaGirata (parola) {
        let parolaRibaltata = ''
        
        for (let i = parola.length -1; i >=0; i--){
            parolaRibaltata += parola[i]
        }
        return parolaRibaltata
    }
    
    if( parola == parolaReverse ){
        document.getElementById('testo1').innerHTML = `la parola è palindroma`
    }else{
        document.getElementById('testo1').innerHTML = `la parola non è palindroma`
    }
    
})

//PRENDERE VALORI DAL HTML

let numero = parseInt(document.querySelector('#numero').value)

//FUNZIONE CHE PARTE AL CLICK DEL BOTTONE CONFERMA
pari.addEventListener('click', function(){
    
    numero = parseInt(document.querySelector('#numero').value)
    let randomNum = ranNum(4);
 
    console.log(numero)
    console.log(randomNum)

    let risultato = numero + randomNum

    if( risultato %2 == 0 ){
        document.getElementById('testo2').innerHTML = `hai vinto`
    }
    else{
        document.getElementById('testo2').innerHTML = `hai perso`
    }

})


dispari.addEventListener('click', function(){
    
    numero = parseInt(document.querySelector('#numero').value)
    let randomNum = ranNum(4);

    console.log(numero)
    console.log(randomNum)

    let risultato = numero + randomNum

    if( risultato %2 == 0 ){
        document.getElementById('testo2').innerHTML = `hai perso`
    }
    else{
        document.getElementById('testo2').innerHTML = `hai vinto`
    }

})

//RANDOMIZZARE UN NUMERO

function ranNum(max) {
  return Math.floor((Math.random() * max)+1);
}