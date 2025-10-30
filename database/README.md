# EAT SAFE Frontend app
This folder contains the food safety inspection records for the state of DE for the past 2 years.

In here you can find the "Food Safety Inspection.csv", the complete dataset of Inspection reports for food establishments of DE.

This DE inspection report data was obtained from DHSS website: https://dhss.delaware.gov/dph/hsp/food-establishment-inspection-reports/

## Available Scripts

In this directory, you can run dev DB as:

docker pull mysql:8.0
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:8.0

Use any DB Client tool such as DBeaver to login to DB.
Import the "Food Safety Inspection.csv" into inspection table db database. The table will be created automatically during impoort.



