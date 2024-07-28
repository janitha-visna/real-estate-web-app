
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
## Image upload process
Our application uses Cloudinary for image uploading and storage. Here’s how the process works:

1. **Uploading an Image**: When a user uploads an image, it is sent to Cloudinary.
2. **Cloudinary Response**: Cloudinary processes the image and returns an object containing information about the uploaded image.
3. **Secure URL**: From the response object, we extract the `secure_url` to access the uploaded image. This URL is stored in our database.
4. **Database Storage**: The `secure_url` is saved in the database associated with the relevant property post.

**prerequisite**
1. create a Cloudinary account.
2. create a upload preset
  - set upload preset name.
  - set signing mode to `Unsigned`.
3. when passing parms from `newPostPage.jsx` , `profileUpatePage` to the  `UploadWidget` component rename `cloudName`:insert your cloud name , `uploadPreset`:insert your upload preset.


   

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
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

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
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

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
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
  cd my-project
```
Start the socket 

```bash
  console-ninja node --watch app.js
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
