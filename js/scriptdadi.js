const numerigenerati = [];
const numeriDaGenerare = 1;

for(let i = 1; i<=numeriDaGenerare; i++){
    let check= false;
    let numeroGenerato = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    console.log(numeroGenerato)
    for(let e = 0 ; e < numerigenerati.length; e ++){
        if(numeroGenerato == numerigenerati[e]){
            check = true
        }

    }
    if(!check){
        numerigenerati.push(numeroGenerato)
    }

}
let dadoInput = document.getElementById('dado');
let btn = document.querySelector('button');
let btnRigioca = document.getElementById('rigioca')
const divWin = document.querySelector('.hai-vinto')
const divLose = document.querySelector('.hai-perso')
const lancio = function(){
    let check2 = false;
    let dado = parseInt(dadoInput.value);
    for(n = 0; n<numerigenerati.length; n++){
        if(dado == numerigenerati[n]){
            check2 = true
        }
    }
    if(check2){
        
        divWin.classList.remove('d-none')
        divLose.classList.add('d-none')

    }else{
       
        divLose.classList.remove('d-none')
        divWin.classList.add('d-none')
    }
    dadoInput.value = '';
}
btn.addEventListener('click', lancio ,)
const ricarica = function(){
    window.location.reload();
}
btnRigioca.addEventListener('click' , ricarica)
