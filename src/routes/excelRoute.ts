import express from 'express';
import ExcelController from '../controllers/excelController';

const router = express.Router();
router.post('/generate-excel', ExcelController.generateExcelFile);

export default router;
