import { avatar } from "../utils/constants";

export default class UserInfo {
  constructor({userNameSelector, userJobSelector, avatarSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._job = document.querySelector(userJobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    };
    return this._userInfo;
  }

  setUserInfo(newInfo) {
    this._name.textContent = newInfo.name;
    this._job.textContent = newInfo.about;
  }

  setAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}
