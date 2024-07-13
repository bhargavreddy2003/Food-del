import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer"; // to create image storage

const foodRouter = express.Router();

//image -storage using multer storage method
const storage = multer.diskStorage({
  destination: "Uploads", // folder destination to store the created files
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`); // when ever a file is created the file wiill have date included in the file name and makes it unique
  },
});
const upload = multer({ storage: storage }); // using this upload we can store image in upload folder in the storage

foodRouter.post("/add", upload.single("image"), addFood); //we use the upload storage that creaded by multer to store image , on the api-end point "/add"

export default foodRouter;
