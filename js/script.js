const btn = document.querySelector('button');
const email = document.getElementById('email');
const btnreset = document.getElementById('riverifica')
console.log(email)
const emailDiInvitati = ['andreagallini@libero.it','pippobaudo@gmail.com','lamiaemail@hotmail.com'];
const invited= []
const invitato = document.querySelector('.invited')
const nonInvitato = document.querySelector('.not-invited')
for(i = 0 ; i < emailDiInvitati.length; i++){
    console.log(emailDiInvitati[i])  
}
const verify = function(){
    let check = false;
    for( let i = 0 ; i< emailDiInvitati.length; i++){
        if(email.value == emailDiInvitati[i]){
            check = true;
            
        }
    }
    if(check){
        invitato.classList.remove('d-none')
       nonInvitato.classList.add('d-none')
        
    }else{
        invitato.classList.add('d-none')
        nonInvitato.classList.remove('d-none')
        btnreset.classList.remove('d-none')
    }
}
btn.addEventListener('click' , verify)
const ricarica = function(){
    window.location.reload();
}
btnreset.addEventListener('click' , ricarica)
