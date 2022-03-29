// esercizio email


// ------- chiedi la mail all'user

// const insert_mail = prompt("inserisci email")


// arrey con le email registrate

const mail_list = ["smith@gmail.com" , "my@gmail.com", "rossi@gmail.com"]


// log singole mail

// for (let i = 0; i < mail_list.length; i++){
//     let user_mail = mail_list[i];
    
//     if (user_mail === insert_mail ){
//         console.log("sei dentro");
//     }else {
//         console.log("riprova")
//     }
    
// }





// --------esercizio dadi 

// genera numero random per il giocatore

const playerElement = Math.floor(Math.random() * 6) + 1;

console.log(playerElement)


// genera numero random per il computer

const computerElement = Math.floor(Math.random() * 6) + 1;

console.log(computerElement)


// determinare chi ha vinto

if (playerElement == computerElement) {
    console.log("pareggio");
} else if (playerElement < computerElement){
    console.log("vince il computer");
} else {
    console.log("vince il giocatore")
}


