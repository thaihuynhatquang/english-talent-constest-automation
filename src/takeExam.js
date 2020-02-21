const { clickElement, autoFillAnswers } = require("./component");
const {
  URL_EXAM,
  SUBMIT_EXAM_BUTTON_ID,
  CONFIRM_SUBMIT_EXAM
} = require("./constant");

const takeExam = async page => {
  await page.goto(URL_EXAM);

  await autoFillAnswers(page)
    .then(() => {})
    .catch(() => {
      console.log("Error Fill Answers");
    });
  await clickElement(page, SUBMIT_EXAM_BUTTON_ID)
    .then(() => {})
    .catch(() => {
      console.log("Error Click Submit Exam Button");
    });
  await page
    .waitForSelector(CONFIRM_SUBMIT_EXAM, { visible: true })
    .then(() => {
      return clickElement(page, CONFIRM_SUBMIT_EXAM);
    })
    .then(() => {
      console.log("Submit Exam Successfully");
    })
    .catch(() => {
      console.log("Error Click Confirm Submit Exam Button");
    });
};

module.exports = takeExam;
