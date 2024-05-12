document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submit = document.querySelector('.submitbtn');

    userData = []
  
    submit.addEventListener('click', ()=> {

        const fullName = document.getElementById('fullName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const address = document.getElementById('address').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const formData = {
            fullName: fullName,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            confirmPassword: confirmPassword
        };
        console.log(formData)
        
        userData.push(formData)
        console.log(userData)
        localStorage.setItem('userData', JSON.stringify(userData));

        document.getElementById('fullName').value="";
        document.getElementById('username').value="";
        document.getElementById('email').value="";
        document.getElementById('phoneNumber').value="";
        document.getElementById('address').value="";
        document.getElementById('confirmPassword').value="";
                


    });

    

});
// const form = document.getElementById('registrationForm');
// const popup = document.createElement('div');
// popup.classList.add('popup');

// const popupContent = document.createElement('div');
// popupContent.classList.add('popup-content');

// const popupMessage = document.createElement('p');
// popupMessage.textContent = 'Form submitted successfully!';

// const closeButton = document.createElement('button');
// closeButton.textContent = 'Close';

// popupContent.appendChild(popupMessage)
