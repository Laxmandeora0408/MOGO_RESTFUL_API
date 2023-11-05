# Message Management RESTful API

## Project Description

This project is centered around the development of a RESTful API for message management. The API enables users to send and receive messages while offering a complete set of CRUD (Create, Read, Update, Delete) operations for efficient message management.

## Objective

The primary objective of this project is to create a RESTful API tailored for message management. This API empowers users to engage in seamless communication by offering the capability to send and receive messages. It provides an array of endpoints that allow users to perform essential operations such as creating new messages, retrieving existing messages, updating message content, and deleting messages.

## Key Features

### Send and Receive Messages

Users can utilize the API to send and receive messages. Messages are systematically stored in a database, facilitating their easy retrieval and management.

### Create Messages

Users have the ability to create new messages by issuing POST requests to the API. Messages are stored in the database with associated metadata, including sender, receiver, and message content.

### Retrieve Messages

The API furnishes endpoints for retrieving messages, offering the following functionalities:
- Fetch messages for specific users
- Access message history
- Retrieve specific messages by their unique identifiers

### Update Messages

Users are empowered to update the content of existing messages. This functionality is particularly useful for making edits or corrections to message content. Users can employ PUT requests to carry out these updates.

### Delete Messages

The API provides users with the option to remove messages they no longer require. The DELETE HTTP method is used to execute the deletion of messages stored in the database.

## Technologies Used

- Node.js and Express.js are the primary technologies used for building the server and API endpoints.
- MongoDB serves as the database where message data is stored.
- Mongoose, as an Object-Document Mapper (ODM), facilitates interactions with the MongoDB database.
- HTTP methods, including GET, POST, PUT, and DELETE, are employed to support the creation, retrieval, updating, and deletion of messages.
- The API is designed following the principles of RESTful architecture to ensure a well-structured and efficient communication system.