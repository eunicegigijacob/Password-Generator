const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.querySelector('#first-password');
const secondPassword = document.querySelector('#second-password');
const lengthInput = document.querySelector('#length-input');
const select = document.getElementById('theme-options');
const body = document.querySelector('body');
const spanel = document.querySelector('span');
const headingEl = document.querySelector('.heading');
const supportTextEl = document.querySelector('.support-text');
const buttonEl = document.querySelector('.btn');
const lineEl = document.querySelector('.line');
const selectEl = document.querySelector('#theme-options');

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
        passwordLength = 6;
    }
    for (i = 0; i < passwordLength; i++){
        let randomIndex1 = Math.floor (Math.random() * 91);
        password1.push(characters[randomIndex1] ) ;

        let randomIndex2 = Math.floor (Math.random() * 91);
        password2.push( characters[randomIndex2]);
    }
}


select.addEventListener('change' , ()=>{
    let optionSelected = select.value;
    if (optionSelected == 'light'){
        body.style.background = '#ECFDF5';
        spanel.style.color ='#2B283A';
        headingEl.style.color = '#10B981';
        supportTextEl.style.color = '#6B7280';
        buttonEl.style.border = 'none';
        lineEl.style.border = '1px solid #D5D4D8';
        selectEl.style.background = '#ECFDF5';
        selectEl.style.color = '#2B283A';

    }else{
        body.style.background = '#1F2937';
        spanel.style.color ='#FFFFFF';
        headingEl.style.color = '#4ADF86';
        supportTextEl.style.color = '#D5D4D8';
        buttonEl.style.border = 'none';
        lineEl.style.border = '1px solid #2F3E53';
        selectEl.style.background = '#1F2937';
        selectEl.style.color = '#ffffff';

    }
})


