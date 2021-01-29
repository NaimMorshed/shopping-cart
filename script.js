const phoneNegSpin = document.getElementById('phoneNegSpin');
const phonePosSpin = document.getElementById('phonePosSpin');
const caseNegSpin = document.getElementById('caseNegSpin');
const casePosSpin = document.getElementById('casePosSpin');
const phoneInput = document.getElementById('phoneInput');
const caseInput = document.getElementById('caseInput');
const phonePrice = document.getElementById('phonePrice');
const casePrice = document.getElementById('casePrice');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');

function updateSpinner(type, spin) {
    const currentPhonePrice = parseFloat(phonePrice.innerText);
    const currentCasePrice = parseFloat(casePrice.innerText);
    const currentSubtotal = parseFloat(subtotal.innerText);
    const currentTotal = parseFloat(total.innerText);
    const currentPhoneInputValue = parseFloat(phoneInput.value);
    const currentCaseInputValue = parseFloat(caseInput.value);

    //Section for Phone
    if (type == 'phone') {
        if (spin == 'posSpin') {
            phoneInput.value = currentPhoneInputValue + 1;
            phonePrice.innerText = currentPhonePrice + 1219;
            subtotal.innerText = currentSubtotal + 1219;
            total.innerText = currentTotal + 1219;
        }
        else if (spin == 'negSpin') {
            if (currentPhoneInputValue != 0) {
                phoneInput.value = currentPhoneInputValue - 1;
                phonePrice.innerText = currentPhonePrice - 1219;
                subtotal.innerText = currentSubtotal - 1219;
                total.innerText = currentTotal - 1219;
            }
        }
        else {
            console.error("Error");
        }
    }

    //Section for Cover
    else if (type == 'case') {
        if (spin == 'posSpin') {
            caseInput.value = currentCaseInputValue + 1;
            casePrice.innerText = currentCasePrice + 59;
            subtotal.innerText = currentSubtotal + 59;
            total.innerText = currentTotal + 59;
        }
        else if (spin == 'negSpin') {
            if (currentCaseInputValue != 0) {
                caseInput.value = currentCaseInputValue - 1;
                casePrice.innerText = currentCasePrice - 59;
                subtotal.innerText = currentSubtotal - 59;
                total.innerText = currentTotal - 59;
            }
        }
        else {
            console.error("Error");
        }
    }

    else {
        console.error('Error');
    }
}

phoneNegSpin.addEventListener('click', function(){
    updateSpinner('phone', 'negSpin');
});
phonePosSpin.addEventListener('click', function(){
    updateSpinner('phone', 'posSpin');
});
caseNegSpin.addEventListener('click', function(){
    updateSpinner('case', 'negSpin');
});
casePosSpin.addEventListener('click', function(){
    updateSpinner('case', 'posSpin');
});
phoneInput.addEventListener('keydown', function(){
    
});
caseInput.addEventListener('keydown', function(){
    
});
