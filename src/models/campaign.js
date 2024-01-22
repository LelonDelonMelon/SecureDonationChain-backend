const mongo = require('mongoose');

const campaignSchema = new mongo.Schema({
    campaignName: {
        type: String
    },
    ownerAddress: {
        type: String
    },
    campaignDescription: {
        type: String
    },
    campaignGoalAmount: {
        type: String
    },
    campaignPicture: {

        data: Buffer,
        contentType: String
        
    },
    campaignRating: {
        type: Number,
        default:1 ,
    },
    numOfRatings: {
        type: Number,
        default: 0,
    }

}, { timestamps: true, bufferCommands: true,toObject: { getters: true }, toJSON: { getters: true } })
module.exports = new mongo.model('Campaign', campaignSchema);
