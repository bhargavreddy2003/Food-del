import { image } from "qr-image";
import foodModel from "../models/foodmodel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`; // creates name of the images
  const food = new foodModel({
    //create new food using food model
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save(); // saves the data in the database
    res.json({ success: true, message: "food saved" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//list food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({}); // gets all the responses
    res.json({ suncess: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const fooditem = await foodModel.findById(req.body.id);
    fs.unlink(`Uploads/${fooditem.image}`, () => {}); // image will be deleted from the folder
    await foodModel.findByIdAndDelete(req.body.id); // food item will be deleted from the db
    res.json({ success: true, message: "food removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error  " });
  }
};

export { addFood, listFood, removeFood };
