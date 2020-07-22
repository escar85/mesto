import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._handleDelete = handleDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleDelete(this._card, this._id);
      this.close();
    });
  }

  open(card, id) {
    super.open();
    this._card = card;
    this._id = id;
  }
}
