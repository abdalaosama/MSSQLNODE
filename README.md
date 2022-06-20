# QuickMssqlQuery
This Project is a simple server which allows you to connect and execute queries on Microsoft SQL Databases <br>
either via a simple UI or a simple API Request

## this app is for testing purposes only, please don't clone this, please don't use this. this was done for testing connection to mssql databases using nodejs and nothing more

## Setting up
to set up the project you will need to have nodejs and npm installed then run the following
```
git clone https://github.com/abdalaosama/QuickMssqlQuery.git
cd QuickMssqlQuery
npm i

// to run the application run
npm run start
``` 

## Usage
to use the app
- Use the UI provided by app in the `/` endpoint
- Send a POST Request to `/connect` endpoint
```
POST ==> /connect
JSON Body :
{
  user,     // Database User
  password, // Database Password
  server,   // Database Server Host
  database, // Database Name
  port,     // Port on which the Database is running
  sql,      // The SQL Query Which you want to run on the Database
}
```

## Disclaimer
This app doesn't do any kind of sanitisation. so it is not suitable for any production enviroment Please don't expose this app to the open internet.


