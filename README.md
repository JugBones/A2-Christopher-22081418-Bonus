# Assignment 2 - Cloud-Based Web Application

- Student Name: Christopher Alexander  
- Student ID: 22081418
- Shared Repository: https://github.com/JugBones/A2-Christopher-22081418.git

## Overview
This project is a cloud-based web application built using **React**, **Node.js**, **Sequelize ORM**, **PostgreSQL**, and **Docker**. It implements a system to manage items, customers, and orders using a RESTful API. 

## Technologies Used
- React: For the front-end user interface.
- Node.js: Backend server framework.
- Express: Used to create RESTful APIs.
- Sequelize: ORM for database modeling.
- PostgreSQL: Relational database.
- Docker: Containerization to ensure portability and ease of deployment.

## Database Schema
The application contains three tables:
1. Items
   - `item_id`: Primary Key
   - `item_name`: Name of the item
   - `item_price`: Price of the item

2. Customers
   - `customer_id`: Primary Key
   - `customer_name`: Name of the customer
   - `customer_email`: Email address

3. Orders
   - `order_id`: Primary Key
   - `order_date`: Date of the order
   - `customer_id`: Foreign Key referencing `Customers`
   - `item_id`: Foreign Key referencing `Items`

## API Endpoints
### Items API
- `GET /items`: Fetch all items.
- `POST /items`: Create a new item.
- `PUT /items/:itemId`: Update an item.
- `DELETE /items/:itemId`: Delete an item.

### Customers API
- `GET /customers`: Fetch all customers.
- `POST /customers`: Create a new customer.
- `PUT /customers/:customerId`: Update a customer.
- `DELETE /customers/:customerId`: Delete a customer.

### Orders API
- `GET /orders`: Fetch all orders.
- `POST /orders`: Create a new order.
- `PUT /orders/:orderId`: Update an order.
- `DELETE /orders/:orderId`: Delete an order.

## Front-End Components
### ManageItems.js
- Allows the user to create, update, delete, and view items.
- Displays the item list with name and price.

### ManageCustomers.js
- Allows the user to create, update, delete, and view customers.
- Displays customer name and email.

### ManageOrders.js
- Allows the user to create orders by selecting a customer and an item.
- Displays orders with the customer and item details.

## How to Run the Application
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

## Task 2 Output
1. Show the API command for “Show Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
2. Show the API command for “Add Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
3. Show the API command for “Delete Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
4. Show the API command for “Update Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
5. Show the API command for “Show Phone” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
6. Show the API command for “Add Phone” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
7. Show the API command for “Delete Phone” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)
8. Show the API command for “Update Phone” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%202%20-%20API/API%20GET%20CONTACTS.png)

## Task 3 Output
1. Show the API command for “Show Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20GET%20CONTACTS.png)
2. Show the API command for “Add Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20POST%20CONTACTS.png)
3. Show the API command for “Update Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20PUT%20CONTACTS.png)
4. Show the API command for “Delete Contact” and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20DELETE%20CONTACTS.png)
5. Show the API command for “Show Phone” & "Add Phone" and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20GET%20AND%20POST%20PHONES.png)
6. Show the API command for “Update Phone” & "Delete Phone" and provide a screenshot of the output 
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%203%20-%20API/API%20PUT%20AND%20DELETE%20PHONES.png)

## Task 4 Test 
1. Prove of all the curl testing with the database
![alt text](https://github.com/JugBones/A2-Christopher-22081418/blob/main/TASK%204%20-%20API/Screenshot%202024-11-20%20at%2015.02.03.png)
