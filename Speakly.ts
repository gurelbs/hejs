const getWeather = require('./controllers/getWeather');
const getTranslate = require('./controllers/getTranslate');
const getMeaning = require('./controllers/getMeaning');
const getDirection = require('./controllers/getDirection');
const getNews = require('./controllers/getNews');

export class Speakly {
	async weather(city: string): Promise<string> {
		try {
			let answer = await getWeather(city)
			console.log(answer)
			return answer
		} catch (error) {
			console.log(error)
			return error
		}
	}
	async translate(word: string): Promise<string> {
		try {
			let answer = await getTranslate(word)
			console.log(answer)
			return answer
		} catch (error) {
			console.log(error)
			return error
		}
	}
	async meaning(meaning: string): Promise<string> {
		try {
			let answer = await getMeaning(meaning)
			console.log(answer)
			return answer
		} catch (error) {
			console.log(error)
			return error
		}
	}

	async direction(from: string, to: string): Promise<Direction | string> {
		try {
			let answer = await getDirection(from, to)
			console.log(answer)
			return answer
		} catch (error) {
			console.log(error)
			return error
		}
	}
	async news(term: string) {
		try {
			let answer = await getNews(term)
			console.log(answer)
			return answer
		} catch (error) {
			console.log(error)
			return error
		}
	}
}
export interface Direction {
	result: string
	direction: string
}
