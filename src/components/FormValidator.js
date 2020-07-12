export class FormValidator {
  constructor(settings, formSelector) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formSelector = formSelector;
  }

  _setEventListeners() {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList, submitButton) {
    if (this._hasInvalidInput(inputList)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = 'true';
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.removeAttribute('disabled');
    }
  }

  _showInputError(inputElement ,errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  // сброс ошибок
  cleanErrors() {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
};
