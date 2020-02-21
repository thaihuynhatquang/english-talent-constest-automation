const puppeteer = require("puppeteer");

const register = require("./src/register");
const login = require("./src/login");
const takeExam = require("./src/takeExam");

const { userData } = require("./src/constant");

const autoEnglishTalent = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await register(page, userData);
  await login(page, userData);
  await takeExam(page);

  await browser.close();
  console.log("Done");
};

autoEnglishTalent();
