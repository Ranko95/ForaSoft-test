const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    res.send('Hello server!');
  } catch (error) {
    next(error)
  }
})

module.exports = router;
