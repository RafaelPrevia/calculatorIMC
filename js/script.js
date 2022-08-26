import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

// variaveis - variables

const form = document.querySelector('form')
const inputWeight = document.querySelector ('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => { // criando e atribuindo função ao evento
  event.preventDefault()
  const weight = inputWeight.value // capturando valores
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height) // erro

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  Modal.Message.innerText = message
  Modal.open()
} 

function notANumber(value) {
  return isNaN(value) || value == ''
}

function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
}









//const modalWrapper =  document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

