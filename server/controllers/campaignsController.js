import { executeQuery } from '../db/dbQuery.js';

export const getCampaigns = async (req, res) => {
    const searchTerm = req.query.search || '';
    const sortOrder = req.query.sort || 'asc'; 
    const page = parseInt(req.query.page) || 1; 
    const perPage = parseInt(req.query.perPage) || 5; 
    const offset = (page - 1) * perPage;
    
    const searchValue = `%${searchTerm}%`;

    const query = `
        SELECT * FROM test.campaigns 
        WHERE name LIKE ? OR description LIKE ?
        ORDER BY createdAt ${sortOrder.toUpperCase()}
        LIMIT ? OFFSET ?
    `;

    const countQuery = `
        SELECT COUNT(*) AS total FROM test.campaigns
        WHERE name LIKE ? 
    `;

    try {
        const data = await executeQuery(query, [searchValue, searchValue, perPage, offset]);
        const countData = await executeQuery(countQuery, [searchValue, searchValue]);
        
        const total = countData[0].total;
        const totalPages = Math.ceil(total / perPage);

        res.status(200).json({
            data,
            pagination: {
                total,
                page,
                totalPages,
                perPage
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getCampaignById = async (req, res) => {
    const campaignId = req.params.id;
    const query = 'SELECT * FROM test.campaigns WHERE id = ?';

    try {
        const data = await executeQuery(query, [campaignId]);

        if (data.length === 0) {
            return res.status(404).json({ message: 'Акций не найдены' });
        }

        res.status(200).json(data[0]);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};

export const createCampaign = async (req, res) => {
    const query = 'INSERT INTO `test`.`campaigns` (`name`, `gift_id`, `gift_quantity`, `days_to_claim`, `days_to_receive`, `description`, `card_numbers`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.gift_id,
        req.body.gift_quantity,
        req.body.days_to_claim,
        req.body.days_to_receive,
        req.body.description,
        req.body.card_numbers,
    ];

    try {
        await executeQuery(query, [values]);
        res.status(201).json({ message: 'Акция успешно создана', status: 'Success' });
    } catch (err) {
        res.status(500).json({ message: 'Ошибка при созданий акций', error: err });
    }
};

export const updateCampaign = async (req, res) => {
    const campaignId = req.params.id;
    const query = 'UPDATE campaigns SET `name` = ?, `gift_id` = ?, `gift_quantity` = ? , `days_to_claim` = ?, `days_to_receive` = ? , `description` = ? , `card_numbers` = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.gift_id,
        req.body.gift_quantity,
        req.body.days_to_claim,
        req.body.days_to_receive,
        req.body.description,
        req.body.card_numbers,
    ];

    try {
        await executeQuery(query, [...values, campaignId]);
        res.status(201).json({ message: 'Акция успешно обновлена', status: 'Success' });
    } catch (err) {
        res.status(500).json({ message: 'Ошибка при обновлений акций', error: err });
    }
};

export const deleteCampaign = async (req, res) => {
    const campaignId = req.params.id;
    const query = 'DELETE FROM campaigns WHERE id = ?';

    try {
        await executeQuery(query, [campaignId]);
        res.status(201).json({ message: 'Акция успешно удалена', status: 'Success' });
    } catch (err) {
        res.status(500).json(err);
    }
};
