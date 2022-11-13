//AUTHENTICATION... etc

const campaignService = require('../services/campaign');
const errorController = require('../controller/errorController');


class CampaignService{
    async list(req, res) {
        const campaigns = await campaignService.list();
        return res.json(campaigns);
    }

    async create(req, res, err) {
        //console.log("req.body is : ",req.body);
        const campaign = await campaignService.create(req.body); //gelen requeste göre user yarat
        console.log("Creating campaign", campaign);
        if(!err)
            return res.json(campaign);
        return res.json(campaign);
    }
    async update(req ,res) {
        
        console.log("Updating campaign with following: ",req.body)
        const campaign = await campaignService.update(req.params.id, req.body);
        console.log("updated campaign");
        return res.json(campaign);
    }
    async delete (req,res) {
        console.log("deleting campaign with id", req.params.id);
        const campaign = await campaignService.delete(req.params.id);
        console.log("deleted campaign");
        res.json(campaign);
    }
}

module.exports = new CampaignService();