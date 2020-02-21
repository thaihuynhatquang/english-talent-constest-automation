# ENGLISH TALENT CONTEST AUTOMATION

This application will auto register account, login, submit exam on [English talent contest](https://englishtalentcontest.vn)

## Usage

Change `Email`, `Password`, `First Name`, `Last Name`, ... in **constant.js**.

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

- **index.js**: execution file
- **src/register.js**: register
- **src/login.js**: login
- **src/takeExam.js**: answer and submit exam
- **src/constant.js**: constant variable
- **src/component.js**: reusable function
