export const profileEditButton = document.querySelector('.profile__edit-button'); // находим кнопку "изменить профиль"
export const cardAddButton = document.querySelector('.profile__card-add-button'); //находим кнопку добавления карточки
export const formElementProfile = document.querySelector('#profileForm'); // находим форму изменения профиля
export const formElementAddCard = document.querySelector('#addCardForm');  //находим форму добавления карточки
export const formEditAvatar = document.querySelector('#editAvatar');
export const nameInput = document.querySelector('#inputName'); // объявляем поле ввода имени
export const jobInput = document.querySelector('#inputJob'); // объявляем поле ввода занятия
export const avatar = document.querySelector('.profile__avatar');
// объект настроек валидации
export const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_status_disabled',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__input-error_active'
};
