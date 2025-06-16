import express from 'express';
import { searchItems } from '../controllers/itemsController.js';

const router = express.Router();

router.get('/items', async (req, res) => {
    const { title, description } = req.query;

    try {
        const items = await searchItems({ title, description });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error: error.message });
    }
});

export default router;