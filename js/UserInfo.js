
class UserInfo {
  constructor(formEdit, popupEdit, api){
    this.formEdit = formEdit
    this.popupEdit = popupEdit
    this.api = api
    this.listenerEdit(formEdit)
  }
  updateUserInfo(event) {
     event.preventDefault();
     console.log(api)
     api.updateUserInfo()
    .then((user) => {  //получаем от сервера данные
          
            // const card = new Card(placesList, obj.name, obj.link)
        document.querySelector('.user-info__name').textContent = user.name;
        document.querySelector('.user-info__job').textContent = user.about;
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${user.avatar})`;  //обрабатываем полученные карточки здесь
        document.querySelector('.popup_edit').classList.remove('popup_is-opened'); 
      })
      .catch((err) => {   //если запрос на сервер завершился неудачно то здесь обрабатываем ошибку, в самом конце цепочки then
          console.log(err); //пока достаточно вывести ошибку в консоль
      }); 
  }
  
  
  setUserInfo() {
    // api.updateUserInfo()
    console.log(this.api)
    this.api.actualUserInfo()
    .then((user) => {  //получаем от сервера данные
            // const card = new Card(placesList, obj.name, obj.link)
        document.querySelector('.user-info__name').textContent = user.name;
        document.querySelector('.user-info__job').textContent = user.about;
        document.querySelector('.user-info__photo').style.backgroundImage = `url(${user.avatar})`;  //обрабатываем полученные карточки здесь
      })
      .catch((err) => {   //если запрос на сервер завершился неудачно то здесь обрабатываем ошибку, в самом конце цепочки then
          console.log(err); //пока достаточно вывести ошибку в консоль
      }); 
    // document.querySelector('.popup_edit').classList.remove('popup_is-opened');
    // document.querySelector('.user-info__name').textContent = formEdit.elements.name.value;
    // document.querySelector('.user-info__job').textContent = formEdit.elements.profile.value;
    // document.querySelector('.popup_edit').classList.remove('popup_is-opened');
  }
  listenerEdit(formEdit){
    this.formEdit.addEventListener('submit', this.updateUserInfo)
  }
}
