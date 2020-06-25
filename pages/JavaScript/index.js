import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './cardsArray.js';

const profileEditButton = document.querySelector('.profile__edit-button'); // находим кнопку "изменить профиль"
const profileCloseButton = document.querySelector('.profile-close-button'); // кнопка закрытия редактирования профиля
const addCardCloseButton = document.querySelector('.add-card-close-button'); // кнопка закрытия добавления карточки
const cardAddButton = document.querySelector('.profile__add-button'); //находим кнопку добавления карточки
const popupAddCard = document.querySelector('#popupAddCard'); // popup добавления карточки
const popupProfile = document.querySelector('#popupProfile'); // popup редактирования профиля
const elements = document.querySelector('.elements');  // сюда добавляем новые карточки
const formElementProfile = document.querySelector('#profileForm'); // находим форму изменения профиля
const formElementAddCard = document.querySelector('#addCardForm')  //находим форму добавления карточки
const nameInput = document.querySelector('#inputName'); // объявляем поле ввода имени
const jobInput = document.querySelector('#inputJob'); // объявляем поле ввода занятия
const profileName = document.querySelector('.profile__name'); // объявляем переменную "имя профиля"
const profileJob = document.querySelector('.profile__job');  // объявляем переменную "занятия профиля"
const bigImage = document.querySelector('#bigImage');
const popupImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__image-caption');
const bigImageCloseButton = document.querySelector('#bigImageCloseButton');
const cardName = document.querySelector('#cardName');   // поле ввода в popup
const linkPhoto = document.querySelector("#linkPhoto"); // поле ввода в popup

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

// функция отрытия окна popup
 function popupOpen(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', popupEsc);
  cardName.value = '';
  linkPhoto.value = '';
};

// функция закрытия окна popup
function popupClose(popupElement) {
  popupElement.classList.remove('popup_opened');
};

// обработчик отправки формы
function formSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;  // перезаписываем введенные в форму значения
  profileJob.textContent = jobInput.value;    // в профиль.
  popupClose(popupProfile);
};

// функция просмотра фото
function viewPhoto(name, link) {
  popupOpen(bigImage);
  popupImage.src = link;
  imageCaption.textContent = name;
}

// функция открытия редактировая профиля
function openProfile() {
  popupOpen(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// функция добавления карточки
function addCard(evt) {
  evt.preventDefault();
  const card = new Card(cardName.value, linkPhoto.value, '.template', viewPhoto);
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
  popupClose(popupAddCard);
}

// функция закрывает popup надатием на Esc
function popupEsc(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('keydown', popupEsc);  // снимаем слушатель
  }
}

// функция закрывает popup нажатием на оверлей
const popupCloseByOverlay = () => {
  const overlays = Array.from(document.querySelectorAll('.popup'));
  overlays.forEach((overlay) => {
    overlay.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
      popupClose(evt.target.closest('.popup'));
      }
    })
  });
};

// обходим массив для создания карточек
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '.template', viewPhoto);
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

// закрываем окно просмотра
bigImageCloseButton.addEventListener('click', () => popupClose(bigImage));

// открываем редактирование профиля
profileEditButton.addEventListener('click', openProfile);

// закрываем редактирования профиля
profileCloseButton.addEventListener('click', () => popupClose(popupProfile));

// обработка изменения профиля
formElementProfile.addEventListener('submit', formSubmitEditProfile);

// открываем добавление карточки
cardAddButton.addEventListener('click', () => popupOpen(popupAddCard));

// закрываем добавление карточки
addCardCloseButton.addEventListener('click', () => popupClose(popupAddCard));

// обработка добавления карточки
formElementAddCard.addEventListener('submit', addCard);

// вызываем закрытие попап по клику на оверлей
popupCloseByOverlay();

// запускаем валидацию форм
profileForm.enableValidation();
addCardForm.enableValidation();
