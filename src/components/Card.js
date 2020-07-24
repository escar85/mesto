

export default class Card {
  constructor(data, cardSelector, handleCardClick, handleLikeCard, handleDeleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._likeCount = data.likes.length;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._owner = data.owner._id;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', this._handleLikeCard);
    this._likeButton.addEventListener('click', () => {
      this._likePhoto();
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteCard);

    this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
  }

  _likePhoto() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');

  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  undeletedCard() {
    if (this._owner === '478d181f5629dafe2d203282') {
    this._element.querySelector('.element__delete-button').classList.remove('element__delete-button_hidden');
    }
  }


  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector('.element__image');
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-count').textContent = this._likeCount;

    this._setEventListeners();

    return this._element;
  }
};

