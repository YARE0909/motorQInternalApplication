import pool from "../config/db";

// Sensor interface
interface Sensor {
  sensor_id?: number;
  vehicle_id: number;
  sensor_type: string;
  sensor_reading: number;
  timestamp: Date;
}

// Fetch sensor anomalies
async function getSensorAnomalies(): Promise<Sensor[]> {
  const [rows] = await pool.query(
    "SELECT vehicle_id, sensor_type, sensor_reading, timestamp FROM Sensors WHERE (sensor_type = 'Speed' AND sensor_reading > 120) OR (sensor_type = 'Fuel Level' AND sensor_reading < 10);"
  );
  return rows as Sensor[];
}

export { getSensorAnomalies, Sensor };
