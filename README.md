# My Express App

This is a basic Node.js project using Express.js framework.

## Project Structure

```
my-express-app
├── src
│   ├── app.js
│   ├── controllers
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── models
│       └── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Setup

To run this project, install it locally using npm:

```
$ cd ../my-express-app
$ npm install
$ npm start
```

## Files

- `src/app.js`: Entry point of the application. Creates an instance of the express app and sets up middleware and routes.
- `src/controllers/index.js`: Exports a class `IndexController` which has a method `getIndex` that handles the root route of the application.
- `src/routes/index.js`: Exports a function `setRoutes` which sets up the routes for the application. Uses the `IndexController` to handle the root route.
- `src/models/index.js`: Exports a function `setModels` which sets up the models for the application. Uses the `mongoose` library to define the schema for the models.
- `package.json`: Configuration file for npm. Lists the dependencies and scripts for the project.

## Dependencies

This project uses the following dependencies:

- Express.js: Web application framework for Node.js
- Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

For more details, see `package.json`.