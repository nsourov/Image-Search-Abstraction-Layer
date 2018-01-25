const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get("/imagesearch/:searchTerm", controller.searchTerm);
router.get("/latest/imagesearch", controller.latestSearched);

module.exports = router;