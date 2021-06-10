const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirmPassword')
const form=document.getElementById('form' )
console.log(username,email,password,confirmPassword,form);

const showError=(input,msg) => {
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector('small')
    small.innerText=msg
}

const showSuccess=(input) => {
    const formControl=input.parentElement;
    formControl.className="form-control success";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(username.value.length<3){
        showError(username,'Username is required')
    }else{
        showSuccess(username)
    }

    if(!validateEmail(email.value)){
        showError(email,'Email is required')
    }else{
        showSuccess(email)
    }

    if(password.value.length<8){
        showError(password,'Password is required')
    }else{
        showSuccess(password)
    }

    if(password.value!==confirmPassword.value||confirmPassword.value===''){
        showError(confirmPassword,'Confirm Password is required')
    }else{
        showSuccess(confirmPassword)
    }
    console.log('click');
})