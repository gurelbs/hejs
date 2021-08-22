const express = require('express');
const getWeather = require('../controllers/getWeather');
const getTranslate = require('../controllers/getTranslate');
const getMeaning = require('../controllers/getMeaning');
const getDirection = require('../controllers/getDirection');
const getNews = require('../controllers/getNews');

const router = express.Router();


router.get(`/direction`, async (req, res) => {
    try {
      let {from, to} = req.query;
      if(!from && !to) res.json('לא נמצא מוצא ויעד')
      if(!from) res.json('לא נמצא מוצא ')
      if(!to) res.json('לא נמצא יעד')
      let answer = await getDirection(from, to);
      res.json(answer)
    } catch (error) {
      console.log(error);
      res.json(error)
    }
})

router.get(`/weather`, async (req, res) => {
  try {
    let {q} = req.query;
    if(!q) res.json('לא נמצא מקום')
    let answer = await getWeather(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/translate`, async (req, res) => {
  try {
    let {q} = req.query;
    if(!q) res.json('לא ניתן לתרגם')
    let answer = await getTranslate(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/meaning`, async (req, res) => {
  try {
    let {q} = req.query;
    if(!q) res.json('לא נמצא מונח')
    let answer = await getMeaning(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/news`, async (req, res) => {
  try {
    let {q} = req.query;
    if (!q) res.json('לא נמצאו חדשות')
    let answer = await getNews(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

module.exports = router