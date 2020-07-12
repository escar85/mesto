export default class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._job = document.querySelector(userJobSelector);
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
    this._job.textContent = newInfo.job;
  }

//   setUserInfo(newInfo) {
//     this._userInfo = {
//     name: newInfo.name,
//     job: newInfo.job
//   }
//   return this._userInfo;
// }
}
