import express from 'express'

const router = express.Router()

// define the home page route
router.get('/:tag', (req, res) => {
  res.json('Birds home page')
})

module.exports = router
