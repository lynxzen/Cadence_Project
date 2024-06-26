const express = require('express');
const router = express.Router();
const path = require('path');
const getProfile = require('../controllers/getProfile');
const imageUpload = require('../controllers/imageUpload');
const authUser = require('../middlewares/verifyJWT');
const getOtherUser = require('../controllers/getOtherProfile');

/*router.get('^/$|/profilepage(.html)?', (req, res) => {
    res.send(path.join(__dirname, '..', 'views', 'profilepage.html'))
})*/

router.get('^/$|/profile(.html)?', getProfile);
router.get('/user/:username', getOtherUser);
//router.post('/upload', authUser.verifyCookie, imageUpload.uploadPhoto);
//router.post('/upload', imageUpload.uploadPhoto);

module.exports = router;
