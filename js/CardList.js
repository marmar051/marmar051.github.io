class CardList {
  constructor(placesList, form, popup, api){
    this.placesList = placesList
    this.popup = popup
    this.form = form
    this.api = api
    this.listenerEdit()
  }

  addCard(event) {
    event.preventDefault();
  
    const newCardName = form.elements.name;
    const newCardLink = form.elements.link;
    // const cardContainer = new Card(placesList, newCardName.value, newCardLink.value);
     
    document.querySelector('.popup').classList.remove('popup_is-opened');
    document.forms.new.querySelector('.popup__button').classList.remove('popup__button_active');
    card.create(newCardName.value, newCardLink.value)
    return card
  
  }

  render(card){
    this.api.getCards()          //вызываем метод класса Api для получения карточек с сервера
      .then((cards) => {  //получаем от сервера данные
          cards.forEach(function (obj) {
            // const card = new Card(placesList, obj.name, obj.link)
            card.create(obj.name, obj.link)
            return card;
            
          })    //обрабатываем полученные карточки здесь
      })
      .catch((err) => {   //если запрос на сервер завершился неудачно то здесь обрабатываем ошибку, в самом конце цепочки then
          console.log(err); //пока достаточно вывести ошибку в консоль
      }); 
  }

  listenerEdit(){
    
    this.form.addEventListener('submit', this.addCard);
  }
}

