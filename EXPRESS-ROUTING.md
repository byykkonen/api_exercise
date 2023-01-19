Description

Objective
Create your own API that queries a database and returns information depending on the data requested

Steps
Create a new project folder
Initialize npm in your project
Create a new folder named “server”
This is where you will initialize a new Express application, create your api endpoints, and query your database
Create a new folder named “db”
This is where you will create your query model and query functions to be used in your application
You will need to create a database with tables in MySQL Workbench to store your data
You can use dummy data with the help of
Mockaroo
(could potentially be a funny api), or real information about something you like
At a minimum, your api should start with GET, POST, PUT, and DELETE endpoints for a specific set of data (characters, topics, categories, prices, etc)
GET returns a list of characters
POST inserts a new character to the database
PUT updates an existing character in the database
DELETE removes an existing character from the database
Have a table in your database that stores information about each request
Create a GET endpoint for viewing the requests made to your server
Make sure to account for errors with try/catch blocks
Create a catch all middleware that acts as a custom error handler for your application
Be sure to account for 404 not found responses
Extra
Now that you’re on your way to creating your very own api, you should write documentation for others to use it too!
Practice your markdown skills to create your very own API documentation
You can either write your own or use something like
Swagger
