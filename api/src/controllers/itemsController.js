import Item from '../models/Item.js';

export const searchItems = async (req, res) => {
    const { title, description, start_price, reserve_price } = req.query;

    try {
        const query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' }; // Case-insensitive search
        }
        if (description) {
            query.description = { $regex: description, $options: 'i' }; // Case-insensitive search
        }
        if (start_price) {
            query.start_price = { $gte: Number(start_price) }; // Greater than or equal to start_price
        }
        if (reserve_price) {
            query.reserve_price = { $lte: Number(reserve_price) }; // Less than or equal to reserve_price
        }

        const items = await Item.find(query);
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error: error.message });
    }
};