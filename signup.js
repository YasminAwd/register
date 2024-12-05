var name1= document.getElementById('name1');
var email1= document.getElementById('email1');
var password1= document.getElementById('password1');
var formAlert1= document.getElementById('formAlert');
var errorMessage = document.getElementById("error-message");

errorMessage.textContent = "";

var newAccountList;
if(localStorage.getItem('newAccountList')!=null){
    newAccountList=JSON.parse(localStorage.getItem('newAccountList'))
}
else{
    newAccountList=[]
}

function registerAccount(){
    if (localStorage.getItem('newAccountList')) {
        errorMessage.textContent = "Username already exists. Please choose another one.";
                return;
    }
    if (name1.classList.contains('is-valid')
        &&email1.classList.contains('is-valid')
        &&password1.classList.contains('is-valid')
      ){
        var newAccount={
            name1:name1.value,
            email1:email1.value,
            password1:password1.value
        }
        newAccountList.push(newAccount);
        localStorage.setItem('newAccountList',JSON.stringify(newAccountList))

        clearForm();

        formAlert1.classList.add('d-none')
    }
    else{
        formAlert1.classList.remove('d-none')
    }
}
function clearForm(){
    name1.value=null;
    email1.value=null;
    password1.value=null;
}

function validateForm(element){
    var regex={
        name:/^[A-z]\w{3,10}\s?\w{0,10}$/,
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