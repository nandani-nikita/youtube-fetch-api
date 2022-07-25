const express = require("express");
const router = express.Router();

const videoCtrl = require('../Controllers/videoController');

router.get('/get', videoCtrl.getAllVideos);
router.get('/title', videoCtrl.getByTitle);


module.exports = router;
