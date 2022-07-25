const express = require("express");
const router = express.Router();

const videoCtrl = require('../Controllers/videoController');

// route to get all videos
// example: http://localhost:8080/video/get?page=2&limit=5
router.get('/get', videoCtrl.getAllVideos);

// route to search video by title or decription
// example: http://localhost:8080/video/title?name=launch&page=2&limit=1
router.get('/title', videoCtrl.getByTitle);


module.exports = router;
