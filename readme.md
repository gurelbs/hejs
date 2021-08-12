<h1 align="center">Welcome to hebrew-js 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/hebrew-js" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/hebrew-js.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> open-source API for Real-time questions In Hebrew.

## Install

```sh
npm install hebrew-js
```
## import 

```sh

const { Hebrew } = require('hebrew-js')

```
## Usage

```sh

const { 
  direction, 
  meaning, 
  news, 
  translate, 
  weather 
} = new Hebrew()

direction('תל אביב','ירושלים')
news('קורונה')
translate('תרגם לאנגלית אפליקציה בעברית')
weather('פתח תקווה')
meaning('פילוסופיה')

```

## Author

👤 **Gurel Ben Shabat**

* Website: https://github.com/gurelbs
* Github: [@gurelbs](https://github.com/gurelbs)
* LinkedIn: [@gurelbs](https://linkedin.com/in/gurelbs)

## Show your support

Give a ⭐️ if this project helped you!

***
