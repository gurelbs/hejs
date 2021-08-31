import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const LanguageSchema = new Schema({
  _id: String,
  name: { 
    type: String, 
    default: '', 
    required: true 
  },
  code: { 
    type: String, 
    default: '', 
    required: true 
  },
});
export const Language = model("Language",LanguageSchema)