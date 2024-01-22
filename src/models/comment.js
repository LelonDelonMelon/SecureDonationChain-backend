const mongo = require('mongoose');

const commentSchema = new mongo.Schema({

    authorID:{
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
    campaignID: {
        type:String
    },
    content: {
        type:String
    }

}, {timestamps:true})

module.exports = new mongo.model('Comment', commentSchema);