const express = require ('express');
const router = express.Router();

router.get('/:seriesId/chapter/:chapterId', (req,res) => {
  const {seriesId,chapterId} = req.params;
  res.json({
    seriesId,
    chapterId,


  })
})
module.exports = router;
