import './index.css';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/cardsArray.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileEditButton,
  cardAddButton,
  formElementProfile,
  formElementAddCard,
  nameInput,
  jobInput
} from '../utils/constants.js';

// создаем карточки из массива
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template', () => {
      const viewPhoto = new PopupWithImage(item.name, item.link, '.popup-big-image');
      viewPhoto.open();
      viewPhoto.setEventListeners();
    })
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
},
  '.elements'
);

// открываем форму добавления карточки
cardAddButton.addEventListener('click', () => {
  CardForm.open();
  addCardForm.cleanErrors();
});

// добавление новой карточки
const CardForm = new PopupWithForm('.popup-add-card', (item) => {
  const newCard = new Card(item, '.template', () => {
    const viewPhoto = new PopupWithImage(item.name, item.link, '.popup-big-image');
    viewPhoto.open();
    viewPhoto.setEventListeners();
  });
  const cardElement = newCard.generateCard();
  cardList.addItem(cardElement);
});

// форма пользователя
const UserForm = new PopupWithForm('.popup-profile', (item) => {
  User.setUserInfo(item);
});

// создаем пользователя
const User = new UserInfo({
  userNameSelector:'.profile__name',
  userJobSelector: '.profile__job'
});

// открываем форму изменения профиля
profileEditButton.addEventListener('click', () => {
  UserForm.open();
  profileForm.cleanErrors();
  nameInput.value = User.getUserInfo().name;
  jobInput.value = User.getUserInfo().job;
});

// объект настроек валидации
const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_status_disabled',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__input-error_active'
};

// создаем экземпляры класса FormValidator для каждой формы
const profileForm = new FormValidator(validationSettings, formElementProfile);
const addCardForm = new FormValidator(validationSettings, formElementAddCard);

//отрисовка карточек
cardList.renderItems();

// запускаем валидацию форм
profileForm.enableValidation();
addCardForm.enableValidation();

// устанавливаем слушатели форм
CardForm.setEventListeners();
UserForm.setEventListeners();
