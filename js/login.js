//step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2 get the email address inside the email input field
    //always remember to use  .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email=emailField.value;
    //step-3 get password
    //a: set id on the html element
    //b: get the element
    //c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);
    //DANGER: do not verify email password on the client side
    //STEP-4 VERIFY EMAIL AND pASSWORD
    if(email==='sontan@bap.com'&& password ==='secret'){
        // console.log('valid user')
        window.location.href='bank.html';
    }
    else{
        alert('Worng email or password');
    }


})