import { Response } from 'express';
import exceljs from 'exceljs';
import { Product } from '../interfaces/productInterface';


export default class excelGenerationServices {
    static async generateExcelFile(jsonData: Product[], res: Response): Promise<void> {
        try {
            const workbook = new exceljs.Workbook();
            const worksheet = workbook.addWorksheet('Products');

            const headers = Object.keys(jsonData[0]);
            worksheet.addRow(headers);

            jsonData.forEach(data => {
                const row: any[] = [];
                headers.forEach(header => {
                    row.push(data[header as keyof Product]);
                });
                worksheet.addRow(row);
            });

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=products-${Date.now()}.xlsx`);

            await workbook.xlsx.write(res);
            res.end();
        } catch (error) {
            console.error('Error generating Excel file:', error);
            throw new Error('Failed to generate Excel file');
        }
    }
}