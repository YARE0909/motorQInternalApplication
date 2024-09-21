import pool from "../config/db";

// Trip interface
interface Trip {
  trip_id?: number;
  vehicle_id: number;
  start_time: Date;
  end_time: Date;
  start_location: string;
  end_location: string;
  distance_traveled: number;
}

// Fetch frequent trips made in the last 7 days
async function getFrequentTrips(): Promise<any[]> {
  const [rows]: any = await pool.query(
    `SELECT v.vehicle_id, v.make, v.model, COUNT(t.trip_id) AS number_of_trips FROM Vehicles v JOIN Trips t ON v.vehicle_id = t.vehicle_id WHERE t.start_time <= NOW() - INTERVAL 7 DAY GROUP BY v.vehicle_id HAVING COUNT(t.trip_id) > 5;`
  );
  return rows;
}

export { getFrequentTrips, Trip };
