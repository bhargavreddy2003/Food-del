import mongoose from "mongoose";
import { image } from "qr-image";

//schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

//model

const foodModel =
  mongoose.model.food || //if model is already there it will use that else
  mongoose.model("food", foodSchema); // it will create a new model

export default foodModel;
