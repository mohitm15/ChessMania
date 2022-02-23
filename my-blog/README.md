# ChessMania





ChessMania is a website to read `Chess Articles`.

## Introduction

The structure of project directory consists of two folders for front-end and back-end.

- my-blog
- my-blog-backend

## Preview

### Live Site 

[Link](https://chess-mania-9puy2k77x-mohitm15.vercel.app/)

### ScreenShots

**Home Page**

![Screenshot from 2022-02-23 19-14-28](https://user-images.githubusercontent.com/35539313/155332154-17e957bf-390f-4c04-99ce-b3f9c85390d5.png)


**About Page**

![Screenshot from 2022-02-23 19-15-22](https://user-images.githubusercontent.com/35539313/155332235-ce3b81cc-fa44-48da-acd6-598a52b6d7d1.png)


**Articles Page**

![Screenshot from 2022-02-23 19-15-32](https://user-images.githubusercontent.com/35539313/155332332-dc8cb44b-d45e-4ac4-8dd8-c393f67013d6.png)

**FAQs Page**

![Screenshot from 2022-02-23 19-15-45](https://user-images.githubusercontent.com/35539313/155332484-9d4b439b-5734-4349-b9a7-f130ec1294f8.png)


**Li-Pro Page**

![Screenshot from 2022-02-23 19-16-19](https://user-images.githubusercontent.com/35539313/155332750-3239a093-0270-4bc7-bea2-2632be1428a1.png)


### Pre-requisites

All the dependencies are mentioned in `package.json` file of both folders.

### Front-End

The Front-end is based on React js.

To Run the in the development mode.\

- Type `npm start`
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
