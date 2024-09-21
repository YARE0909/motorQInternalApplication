import pool from "../config/db";

// Maintenance interface
interface Maintenance {
  maintenance_id?: number;
  vehicle_id: number;
  maintenance_type: string;
  maintenance_date: Date;
  maintenance_cost: number;
}

// Fetch maintenance history for a vehicle
async function getMaintenanceHistory(
  vehicle_id: number
): Promise<Maintenance[]> {
  const [rows] = await pool.query(
    "SELECT * FROM Maintenance WHERE vehicle_id = ? ORDER BY maintenance_date DESC;",
    [vehicle_id]
  );
  return rows as Maintenance[];
}

export { getMaintenanceHistory, Maintenance };
