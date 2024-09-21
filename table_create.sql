-- Vehicles Table
CREATE TABLE IF NOT EXISTS Vehicles (
    vehicle_id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    fuel_type VARCHAR(50),
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES Owners(owner_id)
);

-- Owners Table
CREATE TABLE IF NOT EXISTS Owners (
    owner_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255)
);

-- Trips Table
CREATE TABLE IF NOT EXISTS Trips (
    trip_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255) NOT NULL,
    distance_traveled FLOAT NOT NULL,
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);

-- Sensors Table
CREATE TABLE IF NOT EXISTS Sensors (
    sensor_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id INT NOT NULL,
    sensor_type VARCHAR(255) NOT NULL,
    sensor_reading FLOAT NOT NULL,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);

-- Maintenance Table
CREATE TABLE IF NOT EXISTS Maintenance (
    maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id INT NOT NULL,
    maintenance_type VARCHAR(255) NOT NULL,
    maintenance_date DATE NOT NULL,
    maintenance_cost FLOAT NOT NULL,
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
);
