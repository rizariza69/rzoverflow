require('dotenv').config()
const Question = require('../models/questions')
const jwt = require('jsonwebtoken')
const tokenjwt = process.env.JWT_TOKEN
const User = require('../models/users')

module.exports = {
    createQuestion: (req, res) => {
        let token = req.headers.token
        let decode = jwt.verify(token, tokenjwt)

        Question
            .create({
                title: req.body.title,
                description: req.body.description,
                userId: decode.id
            })
            .then(question => {
                res.status(201).json({
                    msg: 'create success',
                    question
                })
            })
            .catch(err => {
                res.status(500).json({
                    err
                })
            })
    },
    myQuestion: (req, res) => {
        let token = req.headers.token
        let decode = jwt.verify(token, tokenjwt)

        Question
            .find({
                userId: decode.id
            })
            .sort({
                date: 'asc'
            })
            .populate('userId')
            .then(question => {
                res.status(200).json({
                    msg: 'my article get it',
                    question
                })
            })
            .catch(error => {
                res.status(400).json({
                    msg: 'error',
                    error
                })
            })
    },
    deleteQuestion: (req, res) => {
        Question
            .deleteOne({
                _id: req.params.id
            })


            .then(article => {
                res.status(200).json({
                    msg: 'delete success',
                    data: article

                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },
    findAllQuestion: (req, res) => {
        Question
            .find({})
            .sort({
                date: 'asc'
            })
            .populate("userId")
            .then(question => {
                res.status(200).json({
                    msg: 'data All Question',
                    data: question
                })
            })

            .catch(error => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },
    findOneQuestion: (req, res) => {
        Question
            .findOne({
                _id: req.params.id
            })
            .populate('userId')
            .then(question => {
                res.status(200).json({
                    msg: 'data question',
                    question
                })
            })
            .catch(error => {
                res.status(400).json({
                    msg: 'erorr',
                    error
                })
            })

    },
    updateQuestion: (req, res) => {
        Question
            .updateOne({
                _id: req.params.id
            }, {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            })
            .then(question => {
                res.status(201).json({
                    msg: 'update success',
                    question
                })
            })
            .catch(error => {
                res.status(400).json({
                    msg: 'error'
                })
            })
    },
    createAnswer: (req, res) => {
        let token = req.headers.token
        let decode = jwt.verify(token, tokenjwt)

        Question
            .updateOne({
                _id: req.params.id
            }, {
                $push: {
                    answer: req.body.answer,
                }
            })
            .then(answer => {
                res.status(200).json({
                    msg: 'create answer success',
                    answer
                })
            })

            .catch(error => {
                res.status(400).json({
                    msg: 'error',
                    error
                })
            })
    },
    upVote: (req, res) => {
        let id = req.params.id
        let token = req.headers.token
        let idAnswer = req.body.dataAnswer._id
        let decode = jwt.verify(token, tokenjwt)

        Question
            .find({
                _id: id
            })
            .then((result) => {

                let asnwerSt = false
                let resetAnswer

                result[0].answer.forEach(element => {
                    if (element._id == idAnswer) {
                        resetAnswer = element
                    }
                })
                resetAnswer.upvote.forEach(element => {
                    if (element.userId == decode.id) {
                        asnwerSt = true
                    }
                })
                resetAnswer.downvote.forEach(element => {
                    if (element.userId == decode.id) {
                        asnwerSt = true
                    }
                })
                resetAnswer.upvote.push({
                    userId: decode.id
                })
                let allAnswer = result[0].answer
                allAnswer.forEach(element => {
                    if (element._id == idAnswer) {
                        element = resetAnswer
                    }

                })

                if ( asnwerSt == false) {
                    Question
                    .updateOne({
                            _id: id
                        }, {
                            $set: {
                                answer: allAnswer
                            }
                        })
                        .then((result) => {
                            res.status(200).json({
                                message: 'success',
                                result
                            })
                        })
                        .catch((err) => {
                            res.status(400).json({
                                message: err.message
                            })
                        });
                } else {
                    res.status(200).json({
                        message: 'already use'
                    })
                }

            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                })

            });
    },
    downVote: (req, res) => {

        let id = req.params.id
        let token = req.headers.token
        let idAnswer = req.body.dataAnswer._id
        let decode = jwt.verify(token, tokenjwt)

        Question
        .find({
                _id: id
            })
            .then((result) => {

                let answerStatus = false
                let resetAnswer
                result[0].answer.forEach(element => {
                    if (element._id == idAnswer) {
                        resetAnswer = element
                    }
                })
                resetAnswer.downvote.forEach(element => {
                    if (element.userId == decode.id) {
                        answerStatus = true
                    }
                })
                resetAnswer.upvote.forEach(element => {
                    if (element.userId == decode.id) {
                        answerStatus = true
                    }
                })
                resetAnswer.downvote.push({
                    userId: decode.id
                })
                let allAnswer = result[0].answer
                allAnswer.forEach(element => {
                    if (element._id == idAnswer) {
                        element = resetAnswer
                    }

                })

                if (answerStatus == false) {
                    Questions.updateOne({
                            _id: id
                        }, {
                            $set: {
                                answer: allAnswer
                            }
                        })
                        .then((result) => {
                            res.status(200).json({
                                message: 'success'
                            })
                        })
                        .catch((err) => {
                            res.status(400).json({
                                message: err.message
                            })
                        });
                } else {
                    res.status(200).json({
                        message: 'already use'
                    })
                }

            })
            .catch((err) => {
                res.status(400).json({
                    message: err.message
                })

            });
    },
    editAnswer: (req, res) => {

    }

}