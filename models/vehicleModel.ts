import pool from "../config/db";

// Vehicle interface
interface Vehicle {
  vehicle_id?: number;
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  owner_id: number;
}

// Get total distance traveled by a specific vehicle in the last 30 days
async function getTotalDistanceTraveled(vehicleId: number): Promise<any[]> {
  const [rows]: any = await pool.query(
    `SELECT v.make, v.model, o.name AS owner_name, SUM(t.distance_traveled) AS total_distance FROM Vehicles v JOIN Owners o ON v.owner_id = o.owner_id JOIN Trips t ON v.vehicle_id = t.vehicle_id WHERE v.vehicle_id = ? AND t.start_time >= NOW() - INTERVAL 30 DAY GROUP BY v.make, v.model, o.name;`,
    [vehicleId]
  );
  return rows;
}

export { getTotalDistanceTraveled, Vehicle };
