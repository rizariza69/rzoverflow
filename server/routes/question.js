var express = require('express');
var router = express.Router();
const Controller = require('../controllers/questions')
const auth = require('../helpers/auth')

router.get('/myQuestion', auth,Controller.myQuestion)
      .get('/',  Controller.findAllQuestion)
      .get('/:id', Controller.findOneQuestion)
      .post('/create', auth, Controller.createQuestion)
      .delete('/:id', Controller.deleteQuestion)
      .put('/:id', Controller.updateQuestion)
      .put('/createAnswer/:id', auth, Controller.createAnswer)
      .put('/upvote/:id', Controller.upVote)
      .put('/downVote/:id', Controller.downVote)
      .put('/editAnswer/:id', auth, Controller.editAnswer)
      



module.exports = router;
