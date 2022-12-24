//AUTHENTICATION... etc

const campaignService = require('../services/campaign');
const errorController = require('../controller/errorController');
const multer = require('multer')


class CampaignService {
    async list(req, res) {
        const campaigns = await campaignService.list(req.query);
        return res.json(campaigns);
    }

    async create(req, res) {
        //console.log("req.body is : ",req.body);
        const filter = req.body
        if (await campaignService.findOne(filter)) {

            return errorController(req, res, "Campaign already exists")
        }
        //check campaigndescription length
        if (req.body.campaignDescription.length >= 255) {
            return errorController(req, res, "Campaign description is too long")
        }
        const storage = multer.diskStorage({
            destination: (req, file, callBack) => {
                callBack(null, 'uploads')
            },
            filename: (req, file, callBack) => {
                callBack(null, `${file.originalname}`)
            }
        })
        let upload = multer({dest:'uploads/'})
        

        const campaign = await campaignService.create(req.body); //gelen requeste göre user yarat
        console.log("Creating campaign", campaign);
        return res.json(campaign);

    }
    async update(req, res) {

        console.log("Updating campaign with following: ", req.body)
        const campaign = await campaignService.update(req.params.id, req.body);
        console.log("updated campaign");
        return res.json(campaign);
    }
    async delete(req, res) {
        console.log("deleting campaign with id", req.params.id);
        const campaign = await campaignService.delete(req.params.id);
        console.log("deleted campaign");
        res.json(campaign);
    }
}

module.exports = new CampaignService();