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
    Create a MySQL database and set its name in the .env file above in DB_NAME and then run the command below to create all the tables
    ```bash
    npm run createTables
    ```

5. **Insert Data**
6. ```bash
    npm run fillDatabase
    ```
7. **Run the project**
    ```bash
     npm run dev
    ```
