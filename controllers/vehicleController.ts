import { Request, Response } from "express";
import { getTotalDistanceTraveled } from "../models/vehicleModel";
import { getMaintenanceHistory } from "../models/maintenanceModel";
import { getSensorAnomalies } from "../models/sensorModel";
import { getFrequentTrips } from "../models/tripModel";

// Get maintenance history for a specific vehicle
export async function getMaintenanceHistoryController(
  req: Request,
  res: Response
): Promise<void> {
  const { vehicle_id } = req.params;

  try {
    const maintenanceHistory = await getMaintenanceHistory(Number(vehicle_id));

    if (maintenanceHistory.length === 0) {
      res
        .status(404)
        .json({ message: "No maintenance history found for this vehicle." });
      return;
    }

    res.status(200).json(maintenanceHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch maintenance history" });
  }
}

// Get sensor anomalies
export async function getSensorAnomaliesController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const anomalies = await getSensorAnomalies();

    if (anomalies.length === 0) {
      res.status(404).json({ message: "No sensor anomalies found." });
      return;
    }

    res.status(200).json(anomalies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sensor anomalies" });
  }
}

// Get vehicles with more than 5 trips in the last 7 days
export async function getFrequentTripsController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const frequentTrips = await getFrequentTrips();

    if (frequentTrips.length === 0) {
      res.status(404).json({
        message: "No vehicles found with more than 5 trips in the last 7 days.",
      });
      return;
    }

    res.status(200).json(frequentTrips);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch frequent trips" });
  }
}

// Get the total distance traveled by a vehicle in the last 30 days
export async function getVehicleTotalDistanceController(
  req: Request,
  res: Response
): Promise<void> {
  const { vehicle_id } = req.query;

  try {
    const totalDistance = await getTotalDistanceTraveled(Number(vehicle_id));

    if (totalDistance.length === 0) {
      res.status(404).json({
        message: "No trips found for this vehicle in the last 30 days.",
      });
      return;
    }

    res.status(200).json(totalDistance);
  } catch (error) {
    res.status(500).json({ error });
  }
}
