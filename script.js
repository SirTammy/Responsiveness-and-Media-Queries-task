const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener ('submit', function(e){
    e.preventDefault()

    //run a function to check the inputs and validate them
    checkInputs()
})

//write the checkInputs function here

function checkInputs(){

    //firstly get the value of the inputs
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim()

    //then writes the conditions for their validity
    if(firstNameVal === ''){
        //set a general function that will work for all inputs
        setError(firstName, "Firstname cannot be blank")
    } else{
        //set a general function that will work for success
        setSucess(firstName)
    }

    //for lastname:
    if(lastNameVal === ''){
        setError(lastName, "Lastname cannot be blank")
    } else{
        setSucess(lastName)
    }

    //for email:
    if(emailVal === ''){
        setError(email, "Email cannot be empty")
    } else{
        setSucess(email)
    }

    //for password:
    if(passwordVal === ''){
        setError(password, "Password cannot be empty")
    } else if(passwordVal.length < 5) {
        setError(password, "Password cannot be less than 5 characters")
    } else{
        setSucess(password)
    }
}

//Now define the two functions for error and success
function setError(input, message){
    const inputContainer = input.parentElement;
    inputContainer.querySelector('small').innerText = message;

    //now add the error class
    inputContainer.className = 'input-container error';
}

function setSucess(input){
    const inputContainer = input.parentElement;

    //remove the error class
    inputContainer.className = 'input-container'
}