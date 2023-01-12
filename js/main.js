const a = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const phone = document.querySelector('#phone')
const inputs = document.querySelectorAll('#form input')
const btn = document.querySelector('#submit')
const invalidPassword = document.querySelector('.invalid-password')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  removeAllWarning()

  if(a.value == '') addWarning(a)
  if(email.value == '') addWarning(email)
  if(password.value == '') addWarning(password)
  if(confirmPassword.value == '') addWarning(confirmPassword)
  if(phone.value == '') addWarning(phone)

  if(confirmPassword.value != password.value){
    console.log('oi')
    checkPassword()
  }
})

const removeAllWarning = () => {
  invalidPassword.style.display = 'none'

  const inputs = document.querySelectorAll('#form .form-group')

  inputs.forEach((item) => {
    if(item.querySelector('.warning')){
      item.querySelector('input').classList.remove('warning-border')
      item.querySelector('.warning').remove()
    }
  })
}

inputs.forEach((item) => {
  item.addEventListener('input', () => {
    if(item.classList.contains('warning-border')){
      item.classList.remove('warning-border')
      item.parentElement.querySelector('.warning').remove()
    }
  })
})

phone.addEventListener('input', () => {
  const formatedNumber = phoneMask(phone.value)  
  
  phone.value = formatedNumber
})

const addWarning = (input) => {
  let warning = document.createElement('div')
  warning.setAttribute('class','warning')
  warning.textContent = 'Campo vazio'

  input.parentNode.appendChild(warning)
  input.classList.add('warning-border')
}

const checkPassword = () => {
  invalidPassword.style.display = 'block'
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")

  return value
}