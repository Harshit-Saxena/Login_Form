const express = require('express');
const router = express.Router();

// Members Landing page route

router.get('/', (req, res) => {
    res.render('members')
})

//* Module Export*
module.exports = router;
