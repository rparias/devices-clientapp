# Devices Client App

This project was made with React 17.
During the development of this project a Dashboard to work with devices was implemented.

![image](https://user-images.githubusercontent.com/22307059/145052387-ef54e7b5-a7ff-491b-9a14-58a47af72c2b.png)

## Setup configuration

Before to run the application open the `.env` file in the root of the project and update the values:

- PORT: This is the application port, by default it is 3005 but it can be changed
- REACT_APP_API_ENDPOINT: This is the endpoint where the server is running.

## Server application

In order to execute this application with a server you need to run it first.
The server repository is [here](https://github.com/NinjaRMM/devicesTask_serverApp).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Launches the prettier check and validate the code with eslint.\

### `npm run format`

Updates the code with the format configured in the prettier file.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project structure

The components were made using the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.

```
.
├── src # Source of the project
│ ├── components # Any kind of components
│ │ ├── elements # These are the foundational components. These are things like buttons, headings, text, and things that don’t stand up so well on their own.
│ │ └── patterns # These components are reusable UI patterns that are composed from the element components
│ └── pages # These components represent our pages. Are composed by components.
└── ...
```
