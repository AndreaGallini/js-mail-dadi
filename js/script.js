const btn = document.querySelector('button');
const email = document.getElementById('email');
const emailDiInvitati = ['andreagallini@libero.it','pippobaudo@gmail.com','lamiaemail@hotmail.com'];
const invited= []
for(i = 0 ; i < emailDiInvitati.length; i++){
    console.log(emailDiInvitati[i])  
}
const verify = function(){
    let check = false;
    for( let i = 0 ; i< emailDiInvitati.length; i++){
        if(email == emailDiInvitati[i]){
            check = true;
        }
    }
    if(check){
        alert('c')
    }else{
        alert('a')
    }
}
btn.addEventListener('click' , verify)
