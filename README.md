# Vehicle Monitoring System (MotorQ Internal Screening Backend Application)

## Overview
The Vehicle Monitoring System is a web application designed to track vehicle data, including trips, sensor readings, and maintenance history. It provides insights into vehicle performance and anomalies, making it easier for owners and fleet managers to monitor and maintain their vehicles.

## Features
- **Trip Tracking**: Log trips with distance traveled and locations.
- **Sensor Monitoring**: Record and analyze sensor data for anomalies.
- **Distance Calculation**: Calculate the total distance traveled by each vehicle over a specified period.
- **Frequent Trips Analysis**: Identify vehicles that made more than five trips in the last seven days.
- **Maintenance History**: Retrieve maintenance records for vehicles.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- MySQL
- dotenv for environment variable management

## Setup and Installation

### Prerequisites
- Node.js (version 14 or higher)
- MySQL (version 5.7 or higher)

### Installation Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/YARE0909/motorQInternalApplication.git
   cd vehicle-monitoring-system
    ```
2. **Install packages**
    ```bash
    npm i
    ```
3. Set up the database
   Create a .env file for the database credentials
   ```bash
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. Create database tables
- Create Owners Table
    ```sql
    CREATE TABLE Owners (
        owner_id INT PRIMARY KEY,
        name VARCHAR(100),
        contact_info VARCHAR(150)
    );
    ```

- Create Vehicles Table
    ```sql
    CREATE TABLE Vehicles (
        vehicle_id INT PRIMARY KEY,
        make VARCHAR(50),
        model VARCHAR(50),
        year INT,
        fuel_type VARCHAR(50),
        owner_id INT,
        FOREIGN KEY (owner_id) REFERENCES Owners(owner_id)
    );
    ```

- Create Trips Table
    ```sql
    CREATE TABLE Trips (
        trip_id INT PRIMARY KEY,
        vehicle_id INT,
        start_time DATETIME,
        end_time DATETIME,
        start_location VARCHAR(100),
        end_location VARCHAR(100),
        distance_traveled DECIMAL(10, 2),
        FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
    );
    ```

- Create Sensors Table
    ```sql
    CREATE TABLE Sensors (
        sensor_id INT PRIMARY KEY,
        vehicle_id INT,
        sensor_type VARCHAR(50),
        sensor_reading DECIMAL(10, 2),
        timestamp DATETIME,
        FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
    );
    ```
- Create Maintenance Table
    ```sql
    CREATE TABLE Maintenance (
        maintenance_id INT PRIMARY KEY,
        vehicle_id INT,
        maintenance_type VARCHAR(50),
        maintenance_date DATETIME,
        maintenance_cost DECIMAL(10, 2),
        FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id)
    );
    ```

5. **Insert Data**
6. **Run the project**
    ```bash
     npm run dev
    ```
