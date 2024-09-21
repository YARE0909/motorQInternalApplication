import fs from "fs";
import path from "path";
import pool from "./config/db";

async function createTables() {
  try {
    const sqlFilePath = path.join(__dirname, "table_create.sql");
    const sqlFileContent = fs.readFileSync(sqlFilePath, "utf-8");

    const sqlStatements = sqlFileContent
      .split(";")
      .filter((line) => line.trim());

    const promises = sqlStatements.map(async (statement) => {
      try {
        await pool.query(statement);
        console.log("Executed:", statement.trim().split("\n")[0]);
      } catch (error) {
        console.error(
          "Error executing:",
          statement.trim().split("\n")[0],
          error
        );
      }
    });

    await Promise.all(promises);
    console.log("All tables created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    pool.end();
  }
}

createTables();
