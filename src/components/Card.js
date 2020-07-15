

export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__like-button').addEventListener('click', () => {
      this._likePhoto();
    });

    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.elements__image').addEventListener('click', this._handleCardClick);
  }

  _likePhoto() {
    this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector('.elements__image');
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
};

