import pool from '../config/db';

export const getBranches = async (query: string, limit: number, offset: number) => {
  const result = await pool.query(
    `SELECT * FROM bank_branches WHERE branch ILIKE $1 ORDER BY ifsc ASC LIMIT $2 OFFSET $3`,
    [`%${query}%`, limit, offset]
  );
  return result.rows;
};

export const searchBranches = async (query: string, limit: number, offset: number) => {
  const result = await pool.query(
    `SELECT * FROM bank_branches WHERE branch ILIKE $1 OR address ILIKE $1 OR city ILIKE $1 OR district ILIKE $1 OR state ILIKE $1 ORDER BY ifsc ASC LIMIT $2 OFFSET $3`,
    [`%${query}%`, limit, offset]
  );
  return result.rows;
};
