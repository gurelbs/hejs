import express from 'express';
import Answers from 'hejs'
const {
  weather,
  languages,
  translate,
  meaning,
  direction,
  news,
  lyrics,
  nakdan,
  quickAnswer
} = new Answers()

import { Language } from './../modules/Languages.js';
const router = express.Router();

router.get(`/direction`, async (req, res) => {
    try {
      let {from, to} = req.query;
      if(!from && !to) return res.json('לא נמצא מוצא ויעד')
      else if(!from) return res.json('לא נמצא מוצא ')
      else if(!to) return res.json('לא נמצא יעד')
      let answer = await direction(from, to);
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
    let answer = await weather(q);
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
    let answer = await translate(q,to);
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
    let answer = await meaning(q);
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
    let answer = await news(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/nakdan`, async (req, res) => {
  try {
    let {q} = req.query;
    if (!q || q.length === 0) return res.json('לא נמצא טקסט')
    let answer = await nakdan(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.get(`/lyrics`, async (req, res) => {
  try {
    let {q, translate} = req.query;
    if (!q || q.length === 0) {
      return res.json('לא נמצא טקסט')
    }
    if (translate) {
      let answer = await lyrics(q,translate);
      return res.json(answer)
    } else {
      let answer = await lyrics(q);
      return res.json(answer)
    }
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})

router.get(`/quickAnswer`, async (req, res) => {
  try {
    let {q} = req.query;
    if (!q || q.length === 0) {
      return res.json('לא נמצא טקסט')
    }
    let answer = await quickAnswer(q);
    res.json(answer)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
export default router;