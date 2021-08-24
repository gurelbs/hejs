require('dotenv').config();
const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
} catch (error) {
    console.log(error);
}
mongoose.connection.once('open', () => console.log('Connected Database Successfully'));