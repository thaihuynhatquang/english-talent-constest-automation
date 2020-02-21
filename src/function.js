const {
  TOTAL_QUESTION,
  CSS_MULTI_CHOICE_QUESTION_TYPE,
  CSS_INPUT_QUESTION_TYPE
} = require("./constant");

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
    const selectorRadioInput = `#question${i} > ${CSS_MULTI_CHOICE_QUESTION_TYPE}`;
    const selectorTextInput = `#question${i} > ${CSS_INPUT_QUESTION_TYPE}`;
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
