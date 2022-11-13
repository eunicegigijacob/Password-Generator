const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.querySelector('#first-password');
const secondPassword = document.querySelector('#second-password');
const lengthInput = document.querySelector('#length-input');

const genButton = document.querySelector('#gen-btn');

let password1 = [];
let password2 = [];

let passwordLength;

genButton.addEventListener('click', () =>{

    if (password1.length == 0 && password2.length == 0){
        makeIndexes();
    }else if (password1.length == passwordLength && password2.length == passwordLength){
        password1 = [];
        password2 = [];
        makeIndexes();
    }
    
    firstPassword.textContent = password1.join('');
    secondPassword.textContent = password2.join('')
})



let makeIndexes = ()=> {    
    if (lengthInput.value !== ''){
      passwordLength = Number(lengthInput.value);
    }else {
        passwordLength = 15;
    }
    for (i = 0; i < passwordLength; i++){
        let randomIndex1 = Math.floor (Math.random() * 91);
        password1.push(characters[randomIndex1] ) ;

        let randomIndex2 = Math.floor (Math.random() * 91);
        password2.push( characters[randomIndex2]);
    }
}


