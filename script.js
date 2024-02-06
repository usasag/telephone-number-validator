const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
const validateButton = document.getElementById('validate-btn');
const clearButton = document.getElementById('clear-btn');
const resultMsg = document.getElementById('result-msg');

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phone-input').value;
    const isValid = phoneNumberRegex.test(phoneNumber);
    
    if (isValid) {
        resultMsg.innerHTML = `<p>Valid phone number:</p> \n <p>${phoneNumber}</p>`;
        resultMsg.style.color = 'green';
        resultMsg.style.display = 'flex';
    } else {
        resultMsg.innerHTML = `<p>Invalid phone number</p> \n <p>${phoneNumber}</p>`;
        resultMsg.style.color = 'red';
        resultMsg.style.display = 'flex';
    }

    if (phoneNumber === "") {
        alert("Please provide a phone number.")
    }
}

function clearInput() {
    document.getElementById('phone-input').value = '';
    resultMsg.innerHTML = '';
}

clearButton.addEventListener('click', clearInput);
validateButton.addEventListener('click', validatePhoneNumber);

// path: index.html