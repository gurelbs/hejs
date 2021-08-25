const express = require('express');
const getWeather = require('../controllers/getWeather');
const getLanguages = require('../controllers/translate/getLanguages');
const getTranslate = require('../controllers/getTranslate');
const getMeaning = require('../controllers/getMeaning');
const getDirection = require('../controllers/getDirection');
const getNews = require('../controllers/getNews');

const {Language} = require('./../modules/Languages');
const router = express.Router();

router.get(`/direction`, async (req, res) => {
    try {
      let {from, to} = req.query;
      if(!from && !to) return res.json('לא נמצא מוצא ויעד')
      else if(!from) return res.json('לא נמצא מוצא ')
      else if(!to) return res.json('לא נמצא יעד')
      let answer = await getDirection(from, to);
      return res.json(answer)
    } catch (error) {
      console.log(error);
      res.json(error)
    }
})

router.get(`/weather`, async (req, res) => {
  try { 
    let {q} = req.query;
    if(!q) return res.json('לא נמצא מקום')
    let answer = await getWeather(q);
    return res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.get(`/languages`, async (req, res) => {
  try {
    let answer = await Language.find()
    if (!answer.length) return res.json('לא נמצאו שפות')
    return res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.get(`/translate`, async (req, res) => {
  try {
    let {q,to} = req.query;
    if(!q || !to) return res.json('לא ניתן לתרגם')
    let answer = await getTranslate(q,to);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/meaning`, async (req, res) => {
  try {
    let {q} = req.query;
    if(!q) return res.json('לא נמצא מונח')
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
    if (!q) return res.json('לא נמצאו חדשות')
    let answer = await getNews(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

module.exports = router