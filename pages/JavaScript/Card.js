
export class Card {
  constructor(name, link, cardSelector, functionViewPhoto) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._viewPhoto = functionViewPhoto;
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

    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._viewPhoto(this._name, this._link);
    });
  }

  _likePhoto() {
    this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
};

