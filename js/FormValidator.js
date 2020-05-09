

class FormValidator {
    constructor(formEdit, form) {
      this.formEdit = formEdit
      this.form = form
      this.validListeners()
    }

    setSubmitButtonState () {
      

    if (document.forms.edit.name.value.length < 2 || document.forms.edit.name.value.length > 30 || document.forms.edit.profile.value.length < 2 || document.forms.edit.profile.value.length > 30) { //REVIEW3
 
      document.forms.edit.querySelector('.popup__button').setAttribute('disabled', true);
      document.forms.edit.querySelector('.popup__button').classList.remove('popup__button_active');
    }
    else {
      document.forms.edit.querySelector('.popup__button').removeAttribute('disabled');
      document.forms.edit.querySelector('.popup__button').classList.add('popup__button_active');
    }
  }

  checkInputValidity (input) {
    const errorElement = document.querySelector(`#error-${input.id}`);

    if (input.value.length == 0) {
      errorElement.textContent = 'Это обязательное поле';
      FormValidator.prototype.activateError(input);

      return false;
    }
 
    if (input.value.length < 2 || input.value.length > 30) { 
      errorElement.textContent = 'Должно быть от 2 до 30 символов';
      FormValidator.prototype.activateError(input);

      return false;
    }

    FormValidator.prototype.resetError(input);
    return true;
  }

  handleValidate(event) {
    FormValidator.prototype.checkInputValidity(event.target);
  }

  activateError(input) {
    input.nextElementSibling.classList.add('error-active');
  }

  resetError (input) {
    input.nextElementSibling.classList.remove('error-active');
    input.nextElementSibling.textContent = '';
  }
  
  validListeners(){
    
    this.formEdit.addEventListener('input', this.setSubmitButtonState);

    this.formEdit.addEventListener('input', this.handleValidate);
    console.log(this.form)
    this.form.addEventListener('input', function (event){
      if(form.name.value.length === 0 || form.link.value.length === 0) {
        form.querySelector('.popup__button').setAttribute('disabled', true);
        form.querySelector('.popup__button').classList.remove('popup__button_active');
      } else {
        form.querySelector('.popup__button').removeAttribute('disabled');
        form.querySelector('.popup__button').classList.add('popup__button_active');
      }
  
  })
  }

}
    