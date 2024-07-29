import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { branchRoutes } from './routes/branchRoutes';

dotenv.config();

const app = express();


app.use(cors());

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/branches', branchRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
