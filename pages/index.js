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

// функция добавления карточки + работа кнопок "лайк" и "удалить" + просмотр картинок
function addCard(name, link) {
  const newCard = card.cloneNode(true);
  const deleteButton = newCard.querySelector('.elements__delete-button');

  newCard.querySelector('.elements__title').textContent = name;       // вставляем название фото
  newCard.querySelector('.elements__image').src = link;              // вставляем фото
  newCard.querySelector('.elements__image').alt = name;
  newCard.querySelector('.elements__like-button').addEventListener('click', function (evt) {  // функция лайка фотографий
    evt.target.classList.toggle('elements__like-button_active');
  })

  deleteButton.addEventListener('click', function () {
    newCard.remove();
  })

  elements.prepend(newCard);

  const bigImage = document.querySelector('#bigImage');
  const bigImageCloseButton = document.querySelector('#bigImageCloseButton');

  // логика просмотра картинок
  newCard.querySelector('.elements__image').addEventListener('click', function () {
    popupOpen(bigImage);
    const popupImage = document.querySelector('.popup__image');
    const imageCaption = document.querySelector('.popup__image-caption');

    popupImage.src = link;
    imageCaption.textContent = name;

  });

  // закрываем окно просмотра
  bigImageCloseButton.addEventListener('click', function () {
    popupClose(bigImage);
  });
};

// создаем карточки из массива
initialCards.forEach(function (item) {
  const name = item.name;
  const link = item.link;
  addCard(name, link);
});

// открываем редактирование профиля
profileEditButton.addEventListener('click', function () {
  popupOpen(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// открываем добавление карточки
cardAddButton.addEventListener('click', function () {
  popupOpen(popupAddCard);
});

// закрываем редактирования профиля
profileCloseButton.addEventListener('click', function () {
  popupClose(popupProfile);
});

// закрываем добавление карточки
addCardCloseButton.addEventListener('click', function () {
  popupClose(popupAddCard);
});

// обработка изменения профиля
formElementProfile.addEventListener('submit', formSubmitEditProfile);

// обработка добавления карточки
formElementAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const cardName = document.querySelector('#cardName').value;   // поле ввода в popup
  const linkPhoto = document.querySelector("#linkPhoto").value; // поле ввода в popup
  addCard(cardName, linkPhoto);
  popupClose(popupAddCard);
});
