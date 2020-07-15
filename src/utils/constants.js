export const profileEditButton = document.querySelector('.profile__edit-button'); // находим кнопку "изменить профиль"
export const cardAddButton = document.querySelector('.profile__card-add-button'); //находим кнопку добавления карточки
export const formElementProfile = document.querySelector('#profileForm'); // находим форму изменения профиля
export const formElementAddCard = document.querySelector('#addCardForm')  //находим форму добавления карточки
export const nameInput = document.querySelector('#inputName'); // объявляем поле ввода имени
export const jobInput = document.querySelector('#inputJob'); // объявляем поле ввода занятия
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
