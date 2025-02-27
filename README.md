
# Real Estate Web Application

This project is a **Real Estate Web Application** developed using a MERN stack architecture. The frontend is built with React, providing a dynamic and interactive user experience. The backend is powered by Express.js, handling API requests and server-side logic. MongoDB is used as the database to store property listings, user data, and other relevant information. Prisma acts as an ORM, simplifying database interactions and ensuring data consistency. 


## Features

- **User Accounts**: Users can create and update their accounts.
- **Property Listings**: Users can create, update, and delete property info, including images and location details.
- **Real-Time Chat**: Users can chat with each other using Socket.IO.
- **Database Management**: Uses Prisma ORM to work with MongoDB.
- **Security**: 
  - Passwords are hashed when stored in the database.
  - JWT tokens are used for authentication.
  - Middleware is used to verify users.
- **Filtering**: Users can filter property listings by city, minimum price, and maximum price.
- **Map Integration**: Users can view available property locations pinned on a map using React Leaflet.

## Tech Stack

**Client:** React, javascript , Vite , Sass

**Server:** Node.js , Express.js

**Database:** MongoDB

## UI Interface

<details>
<img width="960" alt="Screenshot 2024-07-28 130543" src="https://github.com/user-attachments/assets/5da2e50d-ffc2-45bf-afc6-292889f01e7e">
<img width="960" alt="Screenshot 2024-07-28 130519" src="https://github.com/user-attachments/assets/4cb70362-59d7-497f-96a4-0339e5999e02">
<img width="960" alt="Screenshot 2024-07-28 114003" src="https://github.com/user-attachments/assets/f92380e3-bedf-4bf8-a267-cb947edf6602">
<img width="960" alt="Screenshot 2024-07-28 113839" src="https://github.com/user-attachments/assets/0de66bb8-c4da-4cd9-b08a-2510fe0da5e1">
<img width="960" alt="Screenshot 2024-07-28 113730" src="https://github.com/user-attachments/assets/00b9392d-b6a9-475b-bfaf-0615ff52c7a8">
<img width="960" alt="Screenshot 2024-07-28 130857" src="https://github.com/user-attachments/assets/aa270c85-f156-46f8-b238-ac7e6e7383ce">
</details>

## System diagram of the real estate web application

![diagram](https://github.com/user-attachments/assets/2abd6d87-3345-47e1-a122-d5054de59bbf)

## Image upload process
Our application uses Cloudinary for image uploading and storage. Here’s how the process works:

1. **Uploading an Image**: When a user uploads an image, it is sent to Cloudinary.
2. **Cloudinary Response**: Cloudinary processes the image and returns an object containing information about the uploaded image.
3. **Secure URL**: From the response object, we extract the `secure_url` to access the uploaded image. This URL is stored in our database.
4. **Database Storage**: The `secure_url` is saved in the database associated with the relevant property post.

**prerequisite**
1. create a Cloudinary account.https://cloudinary.com/
2. create a upload preset
  - set upload preset name.
  - set signing mode to `Unsigned`.
3. when passing parms from `newPostPage.jsx` , `profileUpatePage` to the  `UploadWidget` component rename `cloudName`:insert your cloud name , `uploadPreset`:insert your upload preset.


   

## Cloudinary

<img width="960" alt="Screenshot 2024-07-28 135626" src="https://github.com/user-attachments/assets/122c67c7-8ad9-44d2-ad24-bd97e7c97c97">

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file on the `api` directory

`DATABASE_URL` = mongodb+srv://user1:<password>@cluster1.8cifiif.mongodb.net/?retryWrites=true&w=majority&appName=cluster1.

 - Replace <password> with the password for the user1 user. 



`JWT_SECRECT_KEY` = 123456789

`CLIENT_URL` = http://localhost:5173

 - frontend URL must be in the `CLIENT_URL`.
 - In the `socket` directory in `app.js` make sure the `origin` is same as the frontend   URL.



## Run Locally

**run frontend Locally**

Go to the project directory

```bash
  cd react-estate-ui
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev   
```

**run api Locally**


Go to the project directory

```bash
  cd api 
```

Install dependencies

```bash
  npm install
```

Start the server

To this project we use Console Ninja which is availble  in VS Code extension

```bash
  console-ninja node --env-file .env  --watch app.js  
```
as a alternative you can use nodemon, to  automatically restarting the node application when file changes in the directory are detected.

nodemon - https://www.npmjs.com/package/nodemon


synchronizes your Prisma schema with your mongodb database schema

```bash
  npx prisma db push 
```

**Start the socket Locally**

Go to the project directory

```bash
  cd socket 
```
Start the socket 

```bash
  console-ninja node --watch app.js
```



