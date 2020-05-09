class Card {
      constructor(placesList, name, link){ 

        this.name = name
        this.link = link
        this.placesList = placesList
        this.listenerEdit()
      }

      create(name, link){
        const placeCard = document.createElement('div');
        const placeCardImage = document.createElement('div');
        const buttonDeleteCard = document.createElement('button');
        const placeCardDescription = document.createElement('div');
        const placeCardName = document.createElement('h3');
        const buttonLikeCard = document.createElement('button');
      
        placeCard.classList.add('place-card');
        placeCardImage.classList.add('place-card__image');
        buttonDeleteCard.classList.add('place-card__delete-icon');
        placeCardDescription.classList.add('place-card__description');
        placeCardName.classList.add('place-card__name');
        buttonLikeCard.classList.add('place-card__like-icon');
      
        placeCardName.textContent = name;
        placeCardImage.style.backgroundImage = `url(${link})`;
      
        this.placesList.appendChild(placeCard);
        placeCard.appendChild(placeCardImage);
        placeCardImage.appendChild(buttonDeleteCard);
        placeCard.appendChild(placeCardDescription);
        placeCardDescription.appendChild(placeCardName);
        placeCardDescription.appendChild(buttonLikeCard);
      }
    
      cardLike(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
        event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
      
      deleteCard (event) {
      if (event.target.classList.contains('place-card__delete-icon')) {
        let cardx = event.target.closest('.place-card');
        document.querySelector('.places-list').removeChild(cardx);
    
      }
    
    }
    listenerEdit(){
       
      this.placesList.addEventListener('click', this.cardLike);
      this.placesList.addEventListener('click', this.deleteCard);
    }
    
  }