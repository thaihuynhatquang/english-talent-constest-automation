# ENGLISH TALENT CONTEST AUTOMATION

This application will auto register account, login, submit exam on [English talent contest](https://englishtalentcontest.vn)

## Usage

Change `Email`, `Password`, `First Name`, `Last Name`, ... in [**constant.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/constant.js).

```
// USER DATA CONSTANT
const email = "";
const password = "";
```

## Installation

```
npm install
```

```
npm start
```

## Folder structure

- [**index.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/index.js): execution file
- [**src/register.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/register.js): register
- [**src/login.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/login.js): login
- [**src/takeExam.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/takeExam.js): answer and submit exam
- [**src/constant.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/constant.js): constant variable
- [**src/function.js**](https://github.com/thaihuynhatquang/english-talent-constest-automation/blob/master/src/function.js): reusable function
