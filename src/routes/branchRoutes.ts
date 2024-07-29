import { Router } from 'express';
import { autocomplete, search } from '../controllers/branchController';

const branchRoutes = Router();

branchRoutes.get('/autocomplete', autocomplete);
branchRoutes.get('/', search);

export { branchRoutes };
