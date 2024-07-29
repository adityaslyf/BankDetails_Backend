import { Request, Response } from 'express';
import { getBranches, searchBranches } from '../models/branchModel';

export const autocomplete = async (req: Request, res: Response) => {
  const { q, limit = 10, offset = 0 } = req.query;
  if (!q) {
    return res.status(400).send({ error: 'Query parameter is required' });
  }
  try {
    const branches = await getBranches(q as string, Number(limit), Number(offset));
    res.json({ branches });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

export const search = async (req: Request, res: Response) => {
  const { q, limit = 10, offset = 0 } = req.query;
  if (!q) {
    return res.status(400).send({ error: 'Query parameter is required' });
  }
  try {
    const branches = await searchBranches(q as string, Number(limit), Number(offset));
    res.json({ branches });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
