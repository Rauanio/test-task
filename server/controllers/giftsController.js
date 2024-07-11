import { executeQuery } from '../db/dbQuery.js';

export const getGifts = async (req, res) => {
    try {
        const query = 'SELECT * FROM test.gifts';
        const data = await executeQuery(query);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};
