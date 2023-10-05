import express, { Router } from "express";
import sendpackage from "../Models/sendpackagemodels.js";

const router = express.Router();

router.get('/packages', (req, res) => {
    const {keyword, category, limit} = req.query;
    res.status(200).json({
        code: 200,
        message: 'Get Data Successful',
        pagination: {
            total_record: 100,
            current_page: 1,
            total_page: limit
        },
        search: {
            keyword: keyword,
            category: category
        }
    });
});

router.post("/packages", async(req, res) => {
    try {
        await sendpackage.create(req.body);
        res.status(201).json({msg: "Package Added"})
    } catch (error) {
        res.send(error.message)
    }
});

export default router;