
class Popup {
  constructor(popup, popupEdit, formEdit, userInfo, form, popupButton, editButton, popupCloseEditx, placesList){
    this.popup = popup
    this.popupEdit = popupEdit
    this.formEdit = formEdit
    this.userInfo = userInfo
    this.form = form
    this.popupListenerEditAdd(popupButton, editButton, popupCloseEditx)
    this.popupListenerEdit(placesList)
  }
  showPic (event) {
    if(event.target.classList.contains('place-card__image')) {
      const bigPic = document.querySelector('.place-card__bigpic');
  
      const linka = event.target.style.backgroundImage;
  
      bigPic.classList.add('place-card__bigpic_is-opened');
  
      bigPic.style.backgroundImage = linka;
      bigPic.addEventListener('click', function() {
        bigPic.classList.remove('place-card__bigpic_is-opened');
      })
      }
  }

  popupOpen(event) {
    console.log(event)
    
    document.forms.new.reset();
    document.forms.new.querySelector('.popup__button').classList.remove('popup__button_active');
    if (event.target.classList.contains('user-info__button')) {
       
      document.querySelector('.popup').classList.add('popup_is-opened');
      document.querySelector('.popup__button').setAttribute('disabled', true);
    }
  }

  popupOpenEdit(event) {
    if (event.target.classList.contains('user-info__editbutton')) {
      document.querySelector('#name').value = document.querySelector('.user-info__name').textContent
      document.querySelector('#profile').value = document.querySelector('.user-info__job').textContent
      document.querySelector('#error-name').textContent = '';
      document.querySelector('#error-profile').textContent = '';
      document.forms.edit.querySelector('.popup__button').removeAttribute('disabled');
      document.forms.edit.querySelector('.popup__button').classList.add('popup__button_active');
      document.querySelector('.popup_edit').classList.add('popup_is-opened');
  
    }
    
   
  }

  popupClose(event) {
    if (event.target.classList.contains('popup__close')) {
      
      document.querySelector('.popup').classList.remove('popup_is-opened');
    }
  }
  
  popupCloseEdit(event) {
    if (event.target.classList.contains('popup__close')) {
       
       document.querySelector('.popup_edit').classList.remove('popup_is-opened');
    }
  }

  popupListenerEditAdd(popupButton, editButton, popupCloseEditx){
    popupButton.addEventListener('click', this.popupOpen);
    document.addEventListener('click', this.popupClose);
    editButton.addEventListener('click', this.popupOpenEdit);
    popupCloseEditx.addEventListener('click', this.popupCloseEdit);
  }

  popupListenerEdit(placesList){
    placesList.addEventListener('click', this.showPic)
  }
}






