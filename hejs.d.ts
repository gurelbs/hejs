import getWeather from './controllers/getWeather';
import getTranslate from './controllers/getTranslate';
import getMeaning from './controllers/getMeaning';
import getDirection from './controllers/getDirection';
import getNews from './controllers/getNews';

class Answers {
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

module.exports = Answers