let firstVariable = '';
let secondVariable = '';
let sign = '';
let finish = false;
 
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
 
const out = document.querySelector('.calc-screen p');
 
function clearAll() {
    firstVariable = '';
    secondVariable = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
 
document.querySelector('.ac').onclick = clearAll;
 
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
 
    out.textContent = '';
 
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (secondVariable === '' && sign === '') {
            if (key === '.' && firstVariable.includes('.')) {
                if (firstVariable.length < 6) {
                    firstVariable += key;
                }
                out.textContent = firstVariable;
            } else if (firstVariable.length < 6) {
                firstVariable += key;
                out.textContent = firstVariable;
            }
        } else if (firstVariable !== '' && secondVariable !== '' && finish) {
            if (secondVariable.length < 6) {
                secondVariable = key;
                finish = false;
                out.textContent = secondVariable;
            }
        } else {
            if (key === '.' && secondVariable.includes('.')) {
                if (secondVariable.length < 6) {
                    secondVariable += key;
                }
                out.textContent = secondVariable;
            } else if (secondVariable.length < 6) {
                secondVariable += key;
                out.textContent = secondVariable;
            }
        }
        updateFontSize();
        return;
    }
    
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }
 
    if( key === '='){
        if(secondVariable ==='') secondVariable=a;
        switch(sign){
            case"+":
            firstVariable=(+firstVariable)+(+secondVariable);
                break;
            case"-":
            firstVariable=firstVariable-secondVariable;
                break;
            case"X":
            firstVariable=firstVariable*secondVariable;
                break;
            case"/":
            firstVariable=firstVariable/secondVariable;
                break;
        }
        finish = true;
        out.textContent = firstVariable;
        console.log(firstVariable,secondVariable,sign);
    }

    function updateFontSize() {
        const maxLength = 6;
        const fontSize = Math.min(400 / maxLength, 44);
        out.style.fontSize = fontSize + 'px';
    }
}
