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


// -------bonus 



// log in nel form

let formElement = document.querySelector("form")

let logElement = document.querySelector(".btn_login")

let btn_logElement = document.querySelector(".btn_log")

function getInputValue (){
    let mailElement = document.getElementById("exampleInputEmail1").value;

    formElement.addEventListener("submit", function (event) {
        event.preventDefault()
        console.log("funziona");
        logElement.setAttribute("disabled", "disabled")
    
        for (let i = 0; i < mail_list.length; i++){
            let user_mail = mail_list[i];
            
            if (mail_list.includes(mailElement) ){
        
                console.log("sei dentro");
                document.getElementById("btn_logged").innerHTML = "Avanti";
                btn_logElement.classList.remove("d-none");
            } else {
         
                console.log("sbagliato")
                document.getElementById("btn_logged").innerHTML = "riprova";
                btn_logElement.classList.remove("d-none");

            }

  
        }
        

    
    })


}

