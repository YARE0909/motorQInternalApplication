import { Router } from "express";
import {
  getMaintenanceHistoryController,
  getSensorAnomaliesController,
  getFrequentTripsController,
  getVehicleTotalDistanceController,
} from "../controllers/vehicleController";

const router = Router();

// Endpoint to get the total distance traveled by a particular vehicles in the last 30 days
router.get("/distance_traveled", getVehicleTotalDistanceController);

// Endpoint to get sensor anomalies
router.get("/sensor_anomalies", getSensorAnomaliesController);

// Endpoint to get maintenance history for a vehicle
router.get("/:vehicle_id/maintenance_history", getMaintenanceHistoryController);

// Endpoint to get vehicles with more than 5 trips in the last 7 days
router.get("/frequent_trips", getFrequentTripsController);

export default router;
