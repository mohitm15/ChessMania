# ChessMania

![chess](https://user-images.githubusercontent.com/35539313/122878555-83b09200-d355-11eb-96f0-7806a50975cf.jpg)


ChessMania is a website to read `Chess Articles`.

## Introduction

The structure of project directory consists of two folders for front-end and back-end. 

 - my-blog
 - my-blog-backend

### Pre-requisites

All the dependencies are mentioned in `package.json` file of both folders.


### Front-End

The Front-end is based on React js.

To Run the in the development mode.\
- Type  `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Back-End

The backend is using Express js server. _PostMan_ is used to test the api calls for addComment and upVote functionality. 

To Run the server.\
- Go to `my-blog-backend` folder and run `npm start` 
- Starts the express server.
- Make api calls to test the results on Postman on [http://localhost:8000/api/articles/learn-node](http://localhost:8000/api/articles/learn-node) to get data.


### DataBase

MongoDB is used to store the database. Follow the commands to run mongoDB service.

- Open a new terminal tab.
- Type `sudo service mongodb start`.

