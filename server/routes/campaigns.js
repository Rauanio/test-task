import express from 'express';
import {
    getCampaigns,
    getCampaignById,
    createCampaign,
    updateCampaign,
    deleteCampaign
} from '../controllers/campaignsController.js';

const router = express.Router();

router.get('/', getCampaigns);
router.get('/:id', getCampaignById);
router.post('/create', createCampaign);
router.put('/update/:id', updateCampaign);
router.delete('/delete/:id', deleteCampaign);

export default router;
