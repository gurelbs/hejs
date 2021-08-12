import getWeather from './controllers/getWeather';
import getTranslate from './controllers/getTranslate';
import getMeaning from './controllers/getMeaning';
import getDirection from './controllers/getDirection';
import getNews from './controllers/getNews';

class Hebrew {
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

const _Hebrew = Hebrew;
export { _Hebrew as Hebrew };