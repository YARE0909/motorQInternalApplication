import fs from "fs";
import path from "path";
import pool from "./config/db";

async function fillDatabase() {
  try {
    const sqlFilePath = path.join(__dirname, "data_fill.sql");
    const sqlFileContent = fs.readFileSync(sqlFilePath, "utf-8");

    const sqlStatements = sqlFileContent
      .split(";")
      .filter((statement) => statement.trim());

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
    console.log("Database filled with mock data.");
  } catch (error) {
    console.error("Error filling database:", error);
  } finally {
    pool.end();
  }
}

fillDatabase();
