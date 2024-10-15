import knex from "knex";
import odbc from "odbc";

// connect mongodb sql
const pool = await odbc.pool("DSN=MongoDB_Atlas_SQL");

// build query using knex
const pg = knex({ client: "pg" });
const queryBuilder = pg("cohart_dev")
  .from("users")
  .select("_id", "full_name")
  .where({ id: 3006 });

// query
const connection = await pool.connect();
const result = await connection.query(queryBuilder.toQuery());
console.log(result.slice(0, result.length));
