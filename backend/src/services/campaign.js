const BaseService = require('./base')
const campaign = require('../models/campaign')

class CampaignService extends BaseService{

    constructor() {
        super(campaign); // CRUD operations on campaign model
    }
}
module.exports = new CampaignService();