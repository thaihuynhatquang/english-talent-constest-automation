//USER DATA CONSTANT
const email = "16042225@vnu.edu.vn";
const password = "123456";
const userData = {
  email: email,
  last_name: "Nguyễn Nhật",
  first_name: "Quang",
  password: password,
  password_confirmation: password,
  birthday: "01-01-2001",
  school_type: "2",
  school_id: "757",
  class: "K64",
  phone: "0987654321",
  need_english: "1",
  study_abroad: "3",
  acceptAcet: "on"
};

//LOGIN CONSTANT
const URL_LOGIN = "https://englishtalentcontest.vn/dang-nhap";
const LOGIN_BUTTON_ID = "#ctl00_main_btnLogin";

// REGISTER CONSTANT
const registerInputText = [
  "email",
  "last_name",
  "first_name",
  "password",
  "password_confirmation",
  "birthday",
  "class",
  "phone"
];
const registerInputSelect = [
  {
    name: "school_type",
    id: "select_school_type"
  },
  {
    name: "school_id",
    id: "select-school_id"
  }
];
const loginInputText = ["email", "password"];
const URL_REGISTER = "https://englishtalentcontest.vn/dang-ki";
const ACCEPT_POLICY = "acceptAcet";
const REGISTER_BUTTON_ID = "#ctl00_main_btnSubmit";

// EXAM CONSTANT
const URL_EXAM = "https://englishtalentcontest.vn/lam-bai-thi";
const SUBMIT_EXAM_BUTTON_ID = "#btnSubmit";
const CONFIRM_SUBMIT_EXAM = 'button[data-bb-handler="confirm"]';
const TOTAL_QUESTION = 70;

module.exports = {
  userData,

  registerInputSelect,
  registerInputText,
  loginInputText,
  URL_REGISTER,
  ACCEPT_POLICY,
  REGISTER_BUTTON_ID,

  URL_LOGIN,
  LOGIN_BUTTON_ID,

  URL_EXAM,
  SUBMIT_EXAM_BUTTON_ID,
  CONFIRM_SUBMIT_EXAM,
  TOTAL_QUESTION
};
