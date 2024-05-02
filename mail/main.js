"use strict"

/*popolamento array*/

const email = ['salvo.z2302@gmail.com', 'zluke507@gmail.com', 'mariorossi38@gmail.com', 'peppino@gmail.com', 'ajejebrazorf@biglietto.com'];

/*stampa array*/

document.getElementById('scope').innerHTML = 'Email già presenti: ';

for(let i = 0; i < email.length; i++){
    if(i === email.length - 1){
        document.getElementById('scope').innerHTML += email[i];
    }else{
        document.getElementById('scope').innerHTML += email[i] + ', ';
    }
}




function myLogin(){
    let verifyEmail = document.getElementById('email').value;

    for(let i = 0; i < email.length; i++){
        if(verifyEmail === email[i]){
            console.log('email presente nel DB');
            return email[i];
        }
    }
    console.log('email non presente nel DB');
}

function myRegister(){

    let newEmail = document.getElementById('email').value;

    let i = email.length;

    email[i] = newEmail;

    document.getElementById('scope').innerHTML += ', ' + email[i];

}

function myShow(){
    for(let i = 0; i < email.length; i++){
        console.log(email[i]);
    }
}