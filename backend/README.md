# Food Backend

# EAT SAFE BACKEND API
Node.js backend for a EAST SAFE application (API server for Food Safety Inspection / Violations related Search by Business or School in the State of Delware).

This API backend service communicates with the database server that has the Food inspection related details stored in it.  This info is obtained from Delaware Food Establishment Inspection Reports website.

Since, I wanted to provide the info through API for the benefit of contributors or new app creators, I have created API middleware throught which they can programmatically obtain information on Food Inspection/violations by establishments.

I sincerely hope, this project to be utilized by other developers to enhance existing services and/or create better services with new features.  

## Features
RESTful JSON API for 
- Violation Search by Businesses and schools in all of Delaware and by each city.
- Analytics data for Graphing
- Top violators

## Tech stack (suggested)
- Node.js Runtime
- Express Middleware library to create API apps.

## Getting started

Prerequisites:
- Node.js >= 16
- npm
- Database server (MySQL)

Install:
```bash
npm install
```



```
NODE_ENV=development
DATABASE_URL=jdbc:mysql://host1:3306/db

```

Run (development):
npm start


## Example endpoints
- GET /api/search
    API endpoint to Search Establishments with Inspection details.
    Sample Query: GET /api/search?establishment=dunkin&city=newark
- GET /api/graph
    API endpoint to Retrieve Inspection metrics by year.
    Sample Query: "GET /api/graph?year=2025"
- GET /api/violators
    API endpoint to Retrieve top 10 Violaters by City.
    Sample Query: "GET /api/graph?year=2025"
- GET /api/cities
    API endpoint to Retrieve all the cities in the state of DE.

All endpoints return JSON and use standard HTTP status codes.


