import express, { Application } from 'express';
import excelRoute from './routes/excelRoute';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', excelRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});