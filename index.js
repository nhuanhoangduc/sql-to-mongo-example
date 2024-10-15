import knex from "knex";
import odbc from "odbc";

// conenct mongodb sql
const connection = await odbc.connect(`DSN=MongoDB_Atlas_SQL`);

// build query using knex
const pg = knex({ client: "pg" });
const queryBuilder = pg("cohart_dev")
  .from("users")
  .select("_id", "full_name")
  .where({ id: 3006 });

// query
const result = await connection.query(queryBuilder.toQuery());
console.log(result.slice(0, result.length));
