/* Можно лучше: довольно общее название для класса, лучше отразить назначение сервера, например MestoApi */
class Api {

  constructor (formEdit){
    this.formEdit = formEdit;
  }

  actualUserInfo(){
    /*
    Можно лучше: здесь и далее, не нужно хардкодить адрес сервера и ключ авторизации в каждом запросе
    Лучше передать их в конструктор класса Api и использовать переданные. 
    При этом итоговый адрес запроса собирается из адреса сервера и адреса ендпоинта:
    например fetch(`${this.baseUrl}/cards`
  */
    return fetch(`https://praktikum.tk/cohort10/users/me`, {
      headers: {
        authorization: '6bf1ae05-1d90-4bff-acfd-cfd65cd2f67f'
      }
    })
    .then((res) => {    
      /*
        Можно лучше: проверка ответа сервера и преобразование из json
        дублируется во всех методах класса Api, лучше вынести в отдельный метод:
          _getResponseData(res) {
          if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
          }
          return res.json();
          }
        Подчеркивание в начале имени метода говорит о том, что метод является приватным, т.е.
        не используется вне класса Api   
      */
            if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
              return Promise.reject(`Ошибка: ${res.status}`); 
            }
            return res.json(); //если res.ok===true возвращаем результат запроса
    })
	  // .then(res => res.json())
   //  .then((result) => {
   //    /* За обновление данных пользователя отвечает класс UserInfo, полученные от сервера данные должны быть переданы как
   //    параметры его метод класса UserInfo */
   //    document.querySelector('.user-info__name').textContent = result.name;
   //    document.querySelector('.user-info__job').textContent = result.about;
   //    document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
   //  });
  }
  getCards() { //метод для получения карточек с сервера
        return fetch(`https://praktikum.tk/cohort10/cards`, { //возвращаем промис c данными
            headers: {
              authorization: '6bf1ae05-1d90-4bff-acfd-cfd65cd2f67f'
            }
          })
          .then((res) => {    
            if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
              return Promise.reject(`Ошибка: ${res.status}`); 
            }
            return res.json(); //если res.ok===true возвращаем результат запроса
          })
  }
  // getCards() {
  //   fetch(`https://praktikum.tk/cohort10/cards`, {
  //     headers: {
  //       authorization: '6bf1ae05-1d90-4bff-acfd-cfd65cd2f67f'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then((result) => {
      
  //     result.forEach(function (obj) {

  //       // const card = new Card(placesList, obj.name, obj.link)
  //       card.create(obj.name, obj.link)
  //       return card;
        
  //     })
  //   });
  // }
  updateUserInfo(){
    return fetch('https://praktikum.tk/cohort10/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '6bf1ae05-1d90-4bff-acfd-cfd65cd2f67f',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.formEdit.elements.name.value,
        about: this.formEdit.elements.profile.value
      })
    }).then((res) => {    
            if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
              return Promise.reject(`Ошибка: ${res.status}`); 
            }
            return res.json(); //если res.ok===true возвращаем результат запроса
          })
    // this.actualUserInfo()
    // .then(res => res.json())
    //   .then((result) => {
    //     /* За обновление данных пользователя отвечает класс UserInfo, полученные от сервера данные должны быть переданы как
    //     параметры его метод класса UserInfo */
    //     document.querySelector('.user-info__name').textContent = result.name;
    //     document.querySelector('.user-info__job').textContent = result.about;
    //     document.querySelector('.user-info__photo').style.backgroundImage = `url(${result.avatar})`;
    //   });
  }

}