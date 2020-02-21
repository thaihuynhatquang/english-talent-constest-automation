const puppeteer = require("puppeteer");

const {
  clickElement,
  selectElement,
  changeInputValue
} = require("./function");

const {
  registerInputSelect,
  registerInputText,
  URL_REGISTER,
  ACCEPT_POLICY,
  REGISTER_BUTTON_ID
} = require("./constant");

const register = async (page, userData) => {
  await page.goto(URL_REGISTER);

  await registerInputText.map(inputName =>
    changeInputValue(page, `input[name=${inputName}]`, userData[inputName])
      .then(() => {})
      .catch(() => {
        console.log("Error Registration Information");
      })
  );

  await registerInputSelect.map(input =>
    selectElement(page, `select#${input.id}`, userData[input.name])
      .then(() => {})
      .catch(() => {
        console.log("Error Registration");
      })
  );
  await clickElement(page, `input[name=${ACCEPT_POLICY}]`)
    .then(() => {})
    .catch(() => {
      console.log("Error Click Accept Policy");
    });

  await clickElement(page, REGISTER_BUTTON_ID)
    .then(() => {
      console.log("Register Successfully");
    })
    .catch(() => {
      console.log("Error Click Register Button");
    });
};

module.exports = register;
