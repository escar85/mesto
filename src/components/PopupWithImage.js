import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._src = link;
    this._caption = name;
  }

  open() {
    super.open();
    document.querySelector(this._popupSelector).querySelector('.popup__image').src = this._src;
    document.querySelector(this._popupSelector).querySelector('.popup__image-caption').textContent = this._caption;
  }
}
