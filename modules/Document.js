import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const Document = new Schema({
    _id: String,
    data: Object
})

export default model("Document",Document);