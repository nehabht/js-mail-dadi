// esercizio email


// chiedi la mail all'user

const insert_mail = prompt("inserisci email")


// arrey con le email registrate

const mail_list = ["smith@gmail.com" , "my@gmail.com", "rossi@gmail.com"]

// log singole mail

for (let i = 0; i < mail_list.length; i++){
    let user_mail = mail_list[i];
    
    if (user_mail === insert_mail ){
        console.log("sei dentro");
    }else {
        console.log("riprova")
    }
    
}


// esercizio dadi