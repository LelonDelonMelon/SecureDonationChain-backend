const mongo = require('mongoose');

const commentSchema = new mongo.Schema({

    author:{
        type: String
    },

    // authorProfilePicture: {
    //     data: Buffer,
    //     contentType:String
    // },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    attachedPost: {
        type:String
    },
    content: {
        type:String
    }

}, {timestamps:true})

module.exports = new mongo.model('Comment', commentSchema);