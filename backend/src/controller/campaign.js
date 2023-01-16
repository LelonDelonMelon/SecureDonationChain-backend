const campaignService = require('../services/campaign');
const errorController = require('../controller/errorController');
const multer = require('multer')
const fs = require('fs')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

class CampaignService {
    async list(req, res) {
        const campaigns = await campaignService.list(req.query);
        return res.json(campaigns);
    }

    async create(req, res, next) {
        const filter = req.body
        if (await campaignService.findOne(filter)) {
            return errorController(req, res, "Campaign already exists")
        }
        if (req.body.campaignDescription.length >= 255) {
            return errorController(req, res, "Campaign description is too long")
        }
        if(req.file)
        {
            
            const file = fs.readFileSync(req.file.path);
            req.body.campaignPicture = {
                data: file,
                contentType: req.file.mimetype
            }

        }
        const campaign = await campaignService.create(req.body);
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

    async uploadImage(req, res) {
        const campaign = await campaignService.uploadImage(req.params.id, req.body.file);
        console.log("uploaded image");
        return res.json(campaign);
    }
    getUpload()
    {
        return upload;
    }
}

module.exports = new CampaignService();
