# 🏞️ Park Service Volunteer Appreciation Program

This TypeScript program supports the **Park Service** in recognizing top volunteers from two recently integrated parks: **Wolf Point Park** and **Raccoon Meadows**. Volunteers contribute through various activities, and only **verified** contributions are counted toward their total hours.

## 📌 Purpose

The goal is to:

- Merge volunteer logs from both parks
- Normalize data types across both sources
- Calculate total **verified** hours per volunteer
- Output a ranked list of volunteers by contribution

## 🧩 How It Works

1. **Combine Logs**: Volunteer data is imported from two park-specific modules.
2. **Normalize Data**: IDs and verification statuses are standardized (e.g., string IDs and booleans).
3. **Calculate Hours**: For each volunteer, verified hours are summed from all activities.
4. **Sort Results**: Volunteers are sorted in descending order based on total verified hours.

## 📁 Project Structure

├── index.ts # Main logic file
├── tsconfig.json # ts configurations
├── raccoon-meadows-log.ts # Raccoon Meadows volunteer data
├── wolf-point-log.ts # Wolf Point volunteer data

## 📦 Dependencies

- **TypeScript**: Ensure your environment can run or compile TypeScript code.
- No external libraries required.

## ▶️ Usage

1. **Install dependencies** (if using a TS build toolchain):

   ```bash
   npm install

2. **Run the script**:

    ```bash
    tsc index.ts to compile to JavaScript
    node index.js 

## 🧠 Key Functions

combineVolunteers(...): Combines and normalizes volunteers from both parks.

isVerified(...): Converts string/boolean verification flags into consistent booleans.

getHours(...): Abstracts different hour field names (hours or time).

calculateHours(...): Aggregates verified hours per volunteer.

byHours(...): Comparator for sorting volunteers by total hours.

## 📌 Notes

1.Only verified activities are counted toward volunteer totals.
2.Handles differences in data formats between the two park logs.
3.Designed with TypeScript type safety in mind.
