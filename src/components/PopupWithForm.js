import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitButton = this._popupElement.querySelector('.popup__submit-button');
    this._submitText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      this._isSavingTrue();
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._popupElement.querySelector('.popup__container').reset();
  }


  _isSavingTrue() {
      this._submitButton.textContent = 'Сохранение...';
  }

  isSavingFalse() {
    this._submitButton.textContent = this._submitText;
}
}
