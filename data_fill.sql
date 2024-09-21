-- Insert Owners
INSERT INTO Owners (name, contact_info) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Mike Johnson', 'mike.j@example.com'),
('Emily Davis', 'emily.davis@example.com'),
('Robert Brown', 'robert.brown@example.com');

-- Insert Vehicles
INSERT INTO Vehicles (make, model, year, fuel_type, owner_id) VALUES
('Toyota', 'Corolla', 2018, 'Petrol', 1),
('Honda', 'Civic', 2020, 'Petrol', 2),
('Ford', 'F-150', 2019, 'Diesel', 3),
('Tesla', 'Model 3', 2022, 'Electric', 4),
('Chevrolet', 'Impala', 2017, 'Petrol', 5);

-- Insert Trips for each vehicle
INSERT INTO Trips (vehicle_id, start_time, end_time, start_location, end_location, distance_traveled) VALUES
(1, '2024-09-01 08:00:00', '2024-09-01 09:00:00', 'Downtown', 'Airport', 30.5),
(1, '2024-09-02 10:00:00', '2024-09-02 10:30:00', 'Mall', 'Home', 15.2),
(1, '2024-09-03 07:30:00', '2024-09-03 08:10:00', 'Home', 'Office', 20.8),
(1, '2024-09-04 09:00:00', '2024-09-04 09:45:00', 'Home', 'School', 18.5),
(1, '2024-09-05 11:00:00', '2024-09-05 12:15:00', 'Stadium', 'Home', 35.0),
(2, '2024-09-01 09:00:00', '2024-09-01 10:15:00', 'City Center', 'Home', 25.6),
(2, '2024-09-02 11:30:00', '2024-09-02 12:00:00', 'Mall', 'Gym', 10.4),
(3, '2024-09-01 10:00:00', '2024-09-01 11:00:00', 'Factory', 'Home', 40.0),
(4, '2024-09-01 12:00:00', '2024-09-01 13:00:00', 'Park', 'Home', 15.0),
(5, '2024-09-01 14:00:00', '2024-09-01 15:00:00', 'Library', 'Home', 20.0);

-- Insert Sensor Readings
INSERT INTO Sensors (vehicle_id, sensor_type, sensor_reading, timestamp) VALUES
(1, 'Fuel Level', 5.0, '2024-09-01 08:00:00'),
(1, 'Speed', 65.0, '2024-09-01 08:30:00'),
(1, 'Fuel Level', 60.0, '2024-09-02 10:00:00'),
(1, 'Speed', 70.0, '2024-09-02 10:15:00'),
(1, 'Fuel Level', 50.0, '2024-09-03 07:30:00'),
(1, 'Speed', 140, '2024-09-03 07:50:00');

-- Insert Maintenance Records
INSERT INTO Maintenance (vehicle_id, maintenance_type, maintenance_date, maintenance_cost) VALUES
(1, 'Oil Change', '2024-06-15', 100.0),
(1, 'Tire Replacement', '2024-07-20', 300.0),
(1, 'Battery Replacement', '2024-08-10', 150.0);
