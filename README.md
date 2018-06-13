# Twitter Webapp 

A simple webapp to display tweets with one or more hashtags

## Overview of the application
* This web application allows user to enter multiple space separated hashtags as an input
* The user can specify the number of tweets to display
* The user can sort the tweets based on date, retweets count and favorites count

## Steps to Setup and Run the Application

### Installation and Running
1. You need to have **node.js** and **npm** installed on your machine. Once installed, you can check the versions using the below commands

```sh
node -v
npm -v
```
Links for reference:
* [install node.js](https://nodejs.org/en/download/)

2. Clone the project from GitHub Repository and Install all the necessary packages
```sh
git clone https://github.com/imar26/twitter-webapp.git
cd twitter-webapp
npm install
```
3. Start node.js server
```sh
nodemon index.js
```

4. Start react server
```
npm start
```

5. Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

### Technologies Used

* Node.js
* React JS
* Express JS
* Twitter API
* REST API
* SCSS

### Production

Application deployed on: https://twitter-webapp.herokuapp.com/