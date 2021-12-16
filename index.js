const shift = document.getElementById("shift");
const symbolKey = document.getElementById('symbols');
const keyboard = document.getElementById('keyboard');
const textarea = document.getElementById('textarea');

const numbersId = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const lettersId = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                'z', 'x', 'c', 'v', 'b', 'n', 'm'
            ];

const symbols = ['1', '@', '#', '$', '%', '^', '&', '*', '(', ')',
            '-', '_', "'", '[', ']', '{', '}', '/', '|',
            ':', '?', '`', '~', '+', '€', '¥'
            ];

const defaultSymbolsId = ['semicolon', 'comma', 'dot', 'forward-slash',
                    'lessThan', 'greaterThan', 'doubleQuote'
                    ];
            
const spacesId = ['enter', 'space'];

const allIds = [...numbersId, ...lettersId, ...defaultSymbolsId, ...spacesId];

let smallLetters = true;
let isSymbol = false;

shift.addEventListener("click", function toUpperCase() {
    if(smallLetters){
        shift.style.backgroundColor = "#08343F";
        for(i=0; i<lettersId.length; i++) {
            document.getElementById(lettersId[i]).style.textTransform = 'uppercase';         
        }
        smallLetters = false;
    } else {
        shift.style.backgroundColor = "#3F3D3D";
        for(i=0; i<lettersId.length; i++) {
            document.getElementById(lettersId[i]).style.textTransform = 'lowercase';           
        }
        smallLetters = true;
    }
});

symbolKey.addEventListener("click", function showSymbols() {
    if(!isSymbol){
        symbolKey.style.backgroundColor = "#08343F";
        for(i=0; i<lettersId.length; i++){
            document.getElementById(lettersId[i]).innerText = symbols[i];
        }
        isSymbol = true;
    } else {
        symbolKey.style.backgroundColor = "#3F3D3D";
        for(i=0; i<lettersId.length; i++){
            document.getElementById(lettersId[i]).innerText = lettersId[i];
        }
        isSymbol = false;
    }
})

function typeText(getId) {
    
    getValue = document.getElementById(getId).textContent;
    textareaCurrentValue = textarea.innerHTML;

    if(getId === 'shift' || getId === 'symbols'){

    } else if(getId === 'enter') {
        textarea.innerText = textareaCurrentValue+'\r\n';
    } else if(getId === 'space') {
        textarea.innerText = textareaCurrentValue+' ';
    } else {
       if(!smallLetters){
           let upperCaseLetter = getValue.toUpperCase();
           textarea.innerText = textareaCurrentValue+upperCaseLetter;
       } else {
        textarea.innerText = textareaCurrentValue+getValue;
       }
    }
}