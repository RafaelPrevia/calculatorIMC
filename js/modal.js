export const Modal = { //object literal para dar obrigações ao modal
     
  Wrapper: document.querySelector('.modal-wrapper'),
  Message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() { Modal.Wrapper.classList.add('open') // aqui é onde o popup aparece
  },
 close() { Modal.Wrapper.classList.remove('open') // removendo o popup ao apertar no X (o svg) 
  },

}

Modal.buttonClose.onclick = () => Modal.close() // removendo o popup ao apertar no X (o svg) 

window.addEventListener('keydown', event => Modal.close()) // removendo o popup ao apertar ESC

