"use strict"

const userDice = [1, 2, 3, 4, 5, 6];
const pcDice = [1, 2, 3, 4, 5, 6];

function myRoll(){

    /*randomizzazione degli indici*/
    let userIndex = Math.floor(Math.random() * 6);
    let pcIndex = Math.floor(Math.random() * 6);

    /*log dell'indice*/
    console.log(userIndex);
    console.log(pcIndex);

    /*cambio del numero nel dom*/
    document.getElementById('userDice').innerHTML = userDice[userIndex];
    document.getElementById('pcDice').innerHTML = pcDice[pcIndex];

    /*serie di controlli*/
    if(userDice[userIndex] > pcDice[pcIndex]){
        document.getElementById('message').innerHTML = "Vince l'utente";
    }else if(pcDice[pcIndex] > userDice[userIndex]){
        document.getElementById('message').innerHTML = "Vince il computer";
    }
    else{
        document.getElementById('message').innerHTML = "Pareggio";
    }
}