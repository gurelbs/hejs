import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: ".env" });

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