MeetX Backend

Description:
The backend of the MeetX platform where users can register, login, view activities, and book them. Activities are listed and booked through API endpoints, with JWT authentication used for secure access.

Table of Contents

Installation

Usage

API Endpoints

POST /registeruser

POST /loginuser

GET /getactivities

POST /postactivities

POST /bookactivities/:userId/:activiteId

GET /bookedactivities/:userId

Technologies Used

Contributing

License

Installation

Follow these steps to set up and run the backend project locally:

Clone the repository:


git clone https://github.com/aghil2003/meetx

cd project-name

Install dependencies:

Make sure you have Node.js installed. Then, run:


npm install

Set up environment variables:

Create a .env file in the root of the project and add the following:


JWT_SECRET=your_jwt_secret_key

MONGO_URI=your_mongo_connection_string

PORT=your_port_number

Run the application:


npm start

This will start the server. By default, it should be running on http://localhost:5000 or the port you defined in the .env file.

Usage

Once the server is running, you can interact with it through the defined API endpoints using tools like Postman, Insomnia, or via a frontend application.

Authentication: Register, login, and use the JWT token to authenticate requests.

Activities: View and book activities available in the system.

API Endpoints

POST /registeruser

Description: Registers a new user.

Request Body:{
  "username": "yourusername",
  "email": "user@example.com",
  "password": "yourpassword"
}

Response:{
  "message": "User created successfully",
  "user": {
    "username": "yourusername",
    "email": "user@example.com",
    "password": "hashedpassword"
  },
  "token": "your_jwt_token_here"
}


POST /loginuser

Description: Logs in a user and returns a JWT token.

Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response:{
  "message": "User logged in successfully",
  "token": "your_jwt_token_here"
}


GET /getactivities

Description: Fetches a list of all activities.

Response:[
  {
    "id": "activityId1",
    "title": "Activity 1",
    "description": "Description of Activity 1",
    "location": "Location 1",
    "date": "2025-05-10",
    "time": "10:00 AM"
  },
  ...
]


POST /postactivities

Description: Creates a new activity.

Request Body:{
  "ActiviteId": "activityId1",
  "title": "Activity 1",
  "description": "Description of Activity 1",
  "location": "Location 1",
  "date": "2025-05-10",
  "time": "10:00 AM"
}

Response:{
  "message": "Activity created successfully",
  "activite": {
    "ActiviteId": "activityId1",
    "title": "Activity 1",
    "description": "Description of Activity 1",
    "location": "Location 1",
    "date": "2025-05-10",
    "time": "10:00 AM"
  }
}


POST /bookactivities/:userId/:activiteId

Description: Books an activity for a specific user.

Request Params:

userId: ID of the user making the booking.

activiteId: ID of the activity being booked.

Headers:

Authorization: Bearer YOUR_JWT_TOKEN
Response:{
  "message": "Activity booked successfully",
  "booking": {
    "user": "userId",
    "activite": "activiteId"
  }
}

GET /bookedactivities/:userId

Description: Fetches a list of activities booked by a specific user.

Response:[
  {
    "activite": {
      "id": "activityId1",
      "title": "Activity 1",
      "description": "Description of Activity 1",
      "location": "Location 1",
      "date": "2025-05-10",
      "time": "10:00 AM"
    }
  },
  ...
]


Technologies Used

Node.js: Server-side JavaScript runtime environment.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database to store data.

Mongoose: ODM (Object Document Mapper) for MongoDB.

JWT (JSON Web Tokens): Authentication mechanism for secure API requests.

Bcrypt.js: Password hashing for secure storage.

dotenv: Environment variable management.
