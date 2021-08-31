import { Language } from './../modules/Languages.js';
import Answers from 'hejs';
const {languages} = new Answers()
export const languageCreator = async () => {
	let count = await Language.countDocuments((err, res) => res)
	console.log(`Language count: ${count}`)
	if (count > 0) {
		console.log(`Language already created.`)
		return
	}
	let language = await languages()
	Language.collection.insertMany(
		language.map(lang => ({
			name: Object.keys(lang)[0],
			code: Object.values(lang)[0],
		}))
	)
	console.log(`Language Uploaded Successfully!`)
}