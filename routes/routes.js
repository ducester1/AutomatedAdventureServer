const express = require("express");
const router = express.Router();
const imageUpload = require("./controllers/imageUpload");
const persistImage = require("./controllers/persistImage");
const retrieveImage = require("./controllers/retrieveImage");
const updateImage = require("./controllers/updateImage");
const deleteImage = require("./controllers/deleteImage");

// Get Orders
router.get("/", async (req, res) => {
	const posts = await loadPostsCollection();
	res.send(await posts.find({}).toArray());
});

// image upload API
router.post("/image-upload", imageUpload.imageUpload);

// persist image
router.post("/persist-image", persistImage.persistImage);

// retrieve image
router.get("/retrieve-image/:cloudinary_id", retrieveImage.retrieveImage);

// delete image
router.delete("/delete-image/:cloudinary_id", deleteImage.deleteImage);

// update image
router.put("/update-image/:cloudinary_id", updateImage.updateImage);

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://user:user@automatedadventure.sriye.mongodb.net/AutomatedAdventure?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
		}
	);

	db = client.db("current_stats");
	return db.collection("playerstats");
}

module.exports = router;
