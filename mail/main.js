"use strict"

const email = ['salvo.z2302@gmail.com', 'zluke507@gmail.com', 'mariorossi38@gmail.com', 'peppino@gmail.com', 'ajejebrazorf@biglietto.com'];

function myLogin(){

}

function myRegister(){
    let newEmail = document.getElementById('email').value;

    let i = email.length;

    email[i] = newEmail;

}

function myShow(){
    for(let i = 0; i < email.length; i++){
        console.log(email[i]);
    }
}