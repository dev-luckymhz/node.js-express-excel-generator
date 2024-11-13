import { Request, Response } from 'express';
import ExcelGenerationService from '../services/excelGenerationService';
import { Product } from '../interfaces/productInterface';

export default class ExcelController {
    static async generateExcelFile(req: Request, res: Response) {
        const jsonData: Product[] = req.body;

        try {
            await ExcelGenerationService.generateExcelFile(jsonData, res);
        } catch (error) {
            console.log('Error generating Excel:', error);
            res.status(500).json({ error: 'Failed to generate Excel file' });
        }
    }
};
