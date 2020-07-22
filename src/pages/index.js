import './index.css';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';
import {
  profileEditButton,
  cardAddButton,
  formElementProfile,
  formElementAddCard,
  nameInput,
  jobInput,
  avatar,
  formEditAvatar,
  validationSettings
} from '../utils/constants.js';

// создаем класс для работы с Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: 'b8b572e2-0aa8-4f92-a0e1-a67154852e96',
    'Content-Type': 'application/json'
  }
});

// создаем карточки из массива
const cardList = new Section(
  (item) => {
    const card = new Card(
      item,
      '.template',
      () => {
        const viewPhoto = new PopupWithImage(item.name, item.link, '.popup-big-image', '.popup__image', '.popup__image-caption');
        viewPhoto.open();
        viewPhoto.setEventListeners();
      },
      (evt) => {
        if (!evt.target.classList.contains('elements__like-button_active')) {
          api.like(item._id)
            .then((res) => {
              evt.target.nextElementSibling.textContent = res.likes.length;
            })
            .catch((err) => {
              console.log(err);
            })
        } else {
          api.disLike(item._id)
            .then((res) => {
              evt.target.nextElementSibling.textContent = res.likes.length;
            })
            .catch((err) => {
              console.log(err);
            })
        }
      });
    const cardElement = card.generateCard();
    card.undeletedCard();
    cardList.addItem(cardElement);
  },
  '.elements'
);

// получаем карточки с сервера
api.getInitialCards()
  .then((res) => {
    //отрисовка карточек
    cardList.renderItems(res);
  })
  .catch((err) => {
    console.log(err);
  });

// создаем пользователя
const user = new UserInfo({
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
});

// форма изменения аватара
const avatarForm = new PopupWithForm('.popup-edit-avatar', (avatarLink) => {
  api.setUserAvatar(avatarLink)
    .then((res) => {
      user.setAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarForm.isSavingFalse();
    });
});

// открываем изменение аватара
avatar.addEventListener('click', () => {
  avatarForm.open();
  changeAvatarForm.cleanErrors();
});

// форма изменения данных пользователя
const userForm = new PopupWithForm('.popup-profile', (item) => {
  api.setUserInfo(item)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userForm.isSavingFalse();
    });
});

// получаем информацию о пользователе
api.getUserInfo()
  .then((res) => {
    user.setUserInfo(res);
    user.setAvatar(res.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

// открываем форму изменения профиля
profileEditButton.addEventListener('click', () => {
  userForm.open();
  profileForm.cleanErrors();
  nameInput.value = user.getUserInfo().name;
  jobInput.value = user.getUserInfo().job;
});

// открываем форму добавления карточки
cardAddButton.addEventListener('click', () => {
  cardForm.open();
  addCardForm.cleanErrors();
});

// добавление новой карточки
const cardForm = new PopupWithForm('.popup-add-card', (item) => {
  api.addCard(item)
    .then((res) => {
      const newCard = new Card(
        res,
        '.template',
        () => {
          const viewPhoto = new PopupWithImage(res.name, res.link, '.popup-big-image');
          viewPhoto.open();
          viewPhoto.setEventListeners();
        },
        // колбэк лайк фото и счетчик лайков
        (evt) => {
          if (!evt.target.classList.contains('elements__like-button_active')) {
            api.like(item._id)
              .then((res) => {
                evt.target.nextElementSibling.textContent = res.likes.length;
              })
              .catch((err) => {
                console.log(err);
              })
          } else {
            api.disLike(item._id)
              .then((res) => {
                evt.target.nextElementSibling.textContent = res.likes.length;
              })
              .catch((err) => {
                console.log(err);
              })
          }
        },
        // колбэк удаления карточки
        () => {
          deleteForm.open(cardElement, res._id);
        });
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardForm.isSavingFalse();
    });
});

// создаем попап для удаления карточки
const deleteForm = new PopupDeleteCard('.popup-delete-card', (card, id) => {
  api.deleteCard(id);
  card.remove();
  card = null;
});

// создаем экземпляры класса FormValidator для каждой формы
const profileForm = new FormValidator(validationSettings, formElementProfile);
const addCardForm = new FormValidator(validationSettings, formElementAddCard);
const changeAvatarForm = new FormValidator(validationSettings, formEditAvatar);

// запускаем валидацию форм
profileForm.enableValidation();
addCardForm.enableValidation();
changeAvatarForm.enableValidation();

// устанавливаем слушатели форм
cardForm.setEventListeners();
userForm.setEventListeners();
avatarForm.setEventListeners();
deleteForm.setEventListeners();
