(function(){
  'use strict'

  const name = document.querySelector('#name')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const confirmPassword = document.querySelector('#confirm-password')
  const phone = document.querySelector('#phone')
  const btn = document.querySelector('#submit')

  email.disabled = true
  password.disabled = true
  confirmPassword.disabled = true
  phone.disabled = true
  btn.disabled = true

  name.addEventListener('input', () => {
    if(name.value){
      email.disabled = false
    }
    else{
      email.disabled = true
      password.disabled = true
      confirmPassword.disabled = true
      phone.disabled = true
    }
  })

  email.addEventListener('input', () => {
    if(email.value && isEmailValid(email.value)){
      password.disabled = false
    }
    else{
      password.disabled = true
      confirmPassword.disabled = true
      phone.disabled = true
    }

  })

  password.addEventListener('input', () => {
    if(password.value){
      confirmPassword.disabled = false
    }
    else{
      confirmPassword.disabled = true
      phone.disabled = true
    }
  })

  confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value && checkPassword()){
      phone.disabled = false
    }
    else{
      phone.disabled = true
    }
  })

  phone.addEventListener('input', () => {
    phone.value = phoneMask(phone.value)

    if(phone.value.length == 15){
      btn.disabled = false
    }
    else{
      btn.disabled = true
    }
  })

  btn.addEventListener('click', (e) => e.preventDefault())

  const isEmailValid = (email) =>{
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
  
    if (emailRegex.test(email)) {
      return true;
    }
  
    return false;
  }


  
  const checkPassword = () => {
    if(password.value == confirmPassword.value){
      if(confirmPassword.closest('div').querySelector('.text-warning')){
        confirmPassword.closest('div').querySelector('.text-warning').remove()
      }
      return true
    }

    const text = document.createElement('p')
    text.textContent = `As senhas são diferentes`
    text.setAttribute('class', 'text-warning')

    if(!confirmPassword.closest('div').querySelector('.text-warning')){
      confirmPassword.closest('div').appendChild(text)
    }

    return false
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")

    return value
  }
})();
