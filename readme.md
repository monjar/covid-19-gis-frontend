# Covid-19 GIS Template Engine

This application serves templates with Covid-19 informations from various countries.

## Pages List

### 1. Main list page - [{ "/" }](https://corona-countries-status.herokuapp.com/)

> Shows list of countries and their latest status on COVID-19

### 2. Not found page - [{ Any other path }](https://corona-countries-status.herokuapp.com/qwert)

> Shows a 404 page

### 3. Error page

> Shows a 500 page if an error happens

## Demo

App is currently accessible on [Heroku](https://corona-countries-status.herokuapp.com/)

## Run app

To run the app on your computer you should follow these steps in your terminal:

1. Clone the project
   ```
   git clone https://github.com/monjar/covid-19-gis-frontend.git
   ```
2. Go to project root
   ```
   cd covid-19-gis-frontend
   ```
3. Create the ".env" file and set your port
   ```
   echo 'PORT = 3030' >.env
   ```
4. Install node modules
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
5. Start app
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
