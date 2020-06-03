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
const template = document.querySelector('#template');  // заготовка карточки
const card = template.content.querySelector('.elements__card');  //
const bigImage = document.querySelector('#bigImage');
const popupImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__image-caption');
const bigImageCloseButton = document.querySelector('#bigImageCloseButton');
let cardName = document.querySelector('#cardName');   // поле ввода в popup
let linkPhoto = document.querySelector("#linkPhoto"); // поле ввода в popup


const initialCards = [
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

function popupOpen(popupElement) {                    // функция отрытия окна popup
  popupElement.classList.add('popup_opened');
};

function popupClose(popupElement) {                   // функция закрытия окна popup
  popupElement.classList.remove('popup_opened');
};

function formSubmitEditProfile(evt) {               // обработчик отправки формы
  evt.preventDefault();
  profileName.textContent = nameInput.value;  // перезаписываем введенные в форму значения
  profileJob.textContent = jobInput.value;    // в профиль.
  popupClose(popupProfile);
};


function likePhoto(evt) {                                       // функция лайка фото
  evt.target.classList.toggle('elements__like-button_active');
}

function deleteCard(evt) {                                      // функция удаления карточки
  evt.target.closest('.elements__card').remove();
}

function viewPhoto(evt) {                                          // функция просмотра фото
  popupOpen(bigImage);

  popupImage.src = evt.target.src;
  imageCaption.textContent = evt.target.alt;
}

function openProfile() {                       // функция открытия редактировая профиля
  popupOpen(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// функция добавления карточки
function createCard(name, link) {
  const newCard = card.cloneNode(true);
  const deleteButton = newCard.querySelector('.elements__delete-button');

  newCard.querySelector('.elements__title').textContent = name;       // вставляем название фото
  newCard.querySelector('.elements__image').src = link;              // вставляем фото
  newCard.querySelector('.elements__image').alt = name;
  newCard.querySelector('.elements__like-button').addEventListener('click', likePhoto);
  deleteButton.addEventListener('click', deleteCard);
  newCard.querySelector('.elements__image').addEventListener('click', viewPhoto);
  return newCard;
};

function cardsFromArray(item) {             // функция обхода массива для создания карточек
  const name = item.name;
  const link = item.link;
  elements.prepend(createCard(name, link));
}

initialCards.forEach(cardsFromArray);       // вызываем обход массива

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

function addCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(cardName.value, linkPhoto.value));
  popupClose(popupAddCard);
}

// обработка добавления карточки
formElementAddCard.addEventListener('submit', addCard);




// // 2 в 1: функции открыть/закрыть
// function popupOpenClose(popupElement) {
//   if (!popupElement.classList.contains('popup__opened')) {
//     popupElement.classList.toggle('popup_opened');
//   }
// }

// // открываем редактирование профиля
// profileEditButton.addEventListener('click', function () {
//   popupOpenClose(popupProfile);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// });

//  // закрываем редактирования профиля
// profileCloseButton.addEventListener('click', function () {
//   popupOpenClose(popupProfile);
// });


// функция на 2 кнопки сразу

// function buttonOpenClose(openButton, closeButton) {
//   openButton.addEventListener('click', function() {
//     popupOpenClose(popupProfile);
//   })
//   closeButton.addEventListener('click', function() {
//     popupOpenClose(popupProfile);
//   })
// }

// buttonOpenClose(profileEditButton, profileCloseButton);
