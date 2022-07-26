# Youtube Fetch API - MERN Stack <!-- omit in toc -->

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from
YouTube for a given tag/search query in a paginated response.

Client React app scaffolded with [create-react-app](https://github.com/facebook/create-react-app)

Repo Components: Client, Server


## Quick Start

### Configure

1. Install [Node.js and NPM](https://nodejs.org/en/)

2. Install server and client packages:

    ```
    npm install
    ```
    or,
    ```
    npm i
    ```
    
3. Install [MongoDB](https://www.mongodb.com/download-center/community)

### Run

1. Ensure [MongoDB](https://www.mongodb.com/) is running on `mongodb://localhost:27017` (or change the `MONGO_URI` line in `server/models/db.js` to point to your MongoDB server)

2. Use the example.env structure for setting up your crediantials and port

3. Start Server:

    ```
    nodemon app.js
    ```
4. Start Client:

    ```
    npm start
    ```


### Deploy

1. Build project:
    ```
    npm run build
    ```

2. Deploy `build` directory

3. Start node server:
    ```
    node app.js
    ```

4. Navigate your browser to http://localhost:3000

## Client

* [React](https://reactjs.org/)
    * Web client
* [Axios](https://github.com/axios/axios)
    * AJAX requests

## Server

* [Node.js](https://nodejs.org/en/)
    * Server platform
* [Express](https://expressjs.com/)
    * Web server

* [MongoDB](https://www.mongodb.com/)
    * Database server
* [Mongoose](https://mongoosejs.com/)
    * Server-side data models

## Development Tools

* [NPM](https://nodejs.org/en/)
    * Package manager and script runner
* [Nodemon](https://github.com/remy/nodemon)
    * Monitors and restarts node server when source changes
    

### Docker Image Creation

1. Get [Docker](https://docs.docker.com/desktop/install/windows-install/)
2. Run the application
3. Execute the following command in server directory
    ```
    docker build "./" -t "<docker-image-name>"
    ```
4. Run the image from docker container or execute the following command in command prompt
   ```
   docker run -p 8080:8080 youtubeapi
   ```
