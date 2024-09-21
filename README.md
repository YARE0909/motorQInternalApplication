# Vehicle Monitoring System (MotorQ Internal Screening Badckend Application)

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
3. **Run the project**
    ```bash
     npm run dev
    ```
