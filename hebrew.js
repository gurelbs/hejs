const getWeather = require('./controllers/getWeather');
const getTranslate = require('./controllers/getTranslate');
const getMeaning = require('./controllers/getMeaning');
const getDirection = require('./controllers/getDirection');
const getNews = require('./controllers/getNews');


class Answers {
  async weather(city) {
    try {
      let answer = await getWeather(city);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async translate(word) {
    try {
      let answer = await getTranslate(word);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async meaning(meaning) {
    try {
      let answer = await getMeaning(meaning);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async direction(from, to) {
    try {
      let answer = await getDirection(from, to);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async news(term) {
    try {
      let answer = await getNews(term);
      console.log(answer);
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}

module.exports = Answers