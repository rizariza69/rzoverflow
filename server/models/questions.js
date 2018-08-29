const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: String,
    description: String,
    userId: { 
        type: Schema.Types.ObjectId,
        ref: 'User' },
    answer: [],
    upVote: [],
    downVote:[]
    }, {
    timestamps: true
})

const Questions = mongoose.model("Question", questionSchema)

module.exports = Questions