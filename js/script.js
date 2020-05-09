

var Module = (function(){
  const popupButton = document.querySelector('.user-info__button');
  const editButton = document.querySelector('.user-info__editbutton');
  const popupEdit = document.querySelector('.popup_edit');
  const popupCloseEditx = document.querySelector('.popup__close-edit');
  const formEdit = document.forms.edit;
  const form = document.forms.new;
  const popup = document.querySelector('.popup');
  const popupClosex = document.querySelector('.popup__close');
  const placesList = document.querySelector('.places-list');
  const buttonLikeCard = placesList.querySelector('.place-card__like-icon');

  return {
    publicMethod: function () {
      const api = new Api(formEdit);
      const card = new Card(placesList)
      const cardList = new CardList(placesList, form, popup, api);
      const userInfo = new UserInfo(formEdit, popupEdit, api)
      const popupС = new Popup(popup, popupEdit, formEdit, userInfo, form, popupButton, editButton, popupCloseEditx, placesList)
      const formValidator = new FormValidator(formEdit, form)


      userInfo.setUserInfo();
      cardList.render(card);
      return api
    },
    publicMethodForm: function(){
      return form
    }, 
    publicMethodCard: function(){
      return new Card(placesList)
    }
  };
})();
const api = Module.publicMethod()
const form = Module.publicMethodForm()
const card = Module.publicMethodCard()
console.log(api)
