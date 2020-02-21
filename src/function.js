const { TOTAL_QUESTION } = require("./constant");

const clickElement = async (page, selector) => {
  try {
    await page.$(selector);
    await page.click(selector);
  } catch (error) {
    throw error;
  }
};

const selectElement = async (page, selector, value) => {
  try {
    await page.$(selector);
    await page.select(selector, value);
  } catch (error) {
    throw error;
  }
};

const changeInputValue = async (page, selector, value) => {
  try {
    await page.$(selector);
    if (value) {
      await page.$eval(selector, (el, v) => (el.value = v), value);
    } else {
      await page.$eval(selector, el => (el.value = "Hello"));
    }
  } catch (error) {
    throw error;
  }
};

const autoFillAnswers = async page => {
  for (i = 1; i < TOTAL_QUESTION - 1; ++i) {
    const selectorRadioInput = `#question${i} > div.col-md-12.question-item > div:nth-child(2) > div > input[type="radio"]`;
    const selectorTextInput = `#question${i} > div.col-md-12.question-item.form-inline > div > input[type="text"]`;
    await clickElement(page, selectorRadioInput)
      .then(() => {})
      .catch(() => {
        return changeInputValue(page, selectorTextInput);
      })
      .catch(() => {});
  }
};

module.exports = {
  clickElement,
  selectElement,
  changeInputValue,
  autoFillAnswers
};
