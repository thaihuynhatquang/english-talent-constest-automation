const { clickElement, changeInputValue } = require("./component");
const { loginInputText, URL_LOGIN, LOGIN_BUTTON_ID } = require("./constant");

const login = async (page, userData) => {
  await page.goto(URL_LOGIN);

  loginInputText.map(inputName =>
    changeInputValue(page, `input[name=${inputName}]`, userData[inputName])
      .then(() => {})
      .catch(() => {
        console.log("Error Login Information");
      })
  );

  await clickElement(page, LOGIN_BUTTON_ID)
    .then(() => {
      console.log("Login Successfully");
    })
    .catch(() => {
      console.log("Error Click Login Button");
    });
};

module.exports = login;
