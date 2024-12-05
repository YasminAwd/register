var email= document.getElementById('email');
var password= document.getElementById('password');
var errorMessage = document.getElementById('error-message');
var successMessage = document.getElementById('success-message');
var storedAccount= localStorage.getItem('newAccount')

errorMessage.textContent = "";
successMessage.textContent = "";


var accountList=[];
function addAccount(){
    if (email1.classList.contains('is-valid')
        &&password1.classList.contains('is-valid')) {
        var account={
            email:email.value,
            password:password.value
        }
        accountList.push(account)

        if (storedAccount==account) {
            successMessage.textContent = "Login successful!";
        }
        else{
            errorMessage.textContent = "Invalid username or password.";
        }
        clearForm();
    } else {
        
    }
}
function clearForm(){
    email.value=null;
    password.value=null;
}

function validateForm(element){
    var regex={
        email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    }

    if(regex[element.id].test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.add('d-none')
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        element.nextElementSibling.classList.remove('d-none')  
    }
}