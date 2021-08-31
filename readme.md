<h1 align="center">Welcome to hejs 👋</h1>
<h4><code>* Currently this is just a beta version</code></h4>
<p>
  <a href="https://www.npmjs.com/package/hejs" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/hejs.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> open-source engine with API for Real-time questions In Hebrew.

## Install

```sh
npm install hejs
```
## import 

```sh

import { Answers } from 'hejs'

```
## Usage

```sh

const { 
  direction, 
  meaning,  
  news, 
  translate, 
  weather 
} = new Answers()

direction('תל אביב','ירושלים')
news('קורונה')
translate('hello world','עברית')
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


[] Quickstart guide
[] Endpoint definitions
[] Code snippets
[] Example responses