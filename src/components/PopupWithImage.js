import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(name, link, popupSelector, imageSelector, captionSelector) {
    super(popupSelector);
    this._src = link;
    this._name = name;
    this._image = this._popupElement.querySelector(imageSelector);
    this._caption = this._popupElement.querySelector(captionSelector);
  }

  open() {
    this._image.src = this._src;
    this._image.alt = this._name;
    this._caption.textContent = this._name;
    super.open();
  }
}
