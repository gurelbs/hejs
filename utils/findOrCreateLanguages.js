const Languages = require('./../modules/Languages')

async function findOrCreateDoc(id){
    try {
        if (!id) return
        const doc = await Languages.findById(id)
        if (doc) return doc
        return await Languages
        .create({_id: id})
        .then( res => console.log(res))
        .catch(err => console.log.error(err))
    } catch (error) {
        console.log(error);
    }
}

module.exports = findOrCreateDoc