import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import giftRoutes from './routes/gifts.js';
import campaignRoutes from './routes/campaigns.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/gifts', giftRoutes);
app.use('/campaigns', campaignRoutes);

app.listen(8080, () => {
    console.log('CONNECTED TO SERVER');
});