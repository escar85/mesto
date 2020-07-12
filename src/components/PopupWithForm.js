import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
  }

  _getInputValues() {
    this._inputList = document.querySelector(this._popupSelector).querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    document.querySelector(this._popupSelector).addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    document.querySelector(this._popupSelector).querySelector('.popup__container').reset();
  }
}
