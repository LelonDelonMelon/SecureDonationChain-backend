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
    }

}, { timestamps: true })
module.exports = new mongo.model('Campaign', campaignSchema);