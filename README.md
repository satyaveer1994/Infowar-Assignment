## Employee Management API

This is a Node.js API for managing employee data. It provides endpoints to create, retrieve, update, and delete employee records.

## API Endpoints

### Create Employee

Creates a new employee record.

- URL: `/employees`

- Method: `POST`

- Request Body:

  ```json
  {
    "name": "John Doe",
    "age": 30,
    "contacts": [
      {
        "type": "phone",
        "value": "1234567890"
      },
      {
        "type": "email",
        "value": "johndoe@example.com"
      }
    ]
  }
  ```

Success Response:

. Status: 201 Created

. Body:

      {
       "id": "60c875f4cdd129001f2d6f8e",
       "name": "John Doe",
       "age": 30,
    "contacts": [
    {
      "type": "phone",
      "value": "1234567890"
    },
    {
      "type": "email",
      "value": "johndoe@example.com"
    }
    ],
     "createdAt": "2023-06-16T12:34:56.789Z",
     "updatedAt": "2023-06-16T12:34:56.789Z"
    }

Get Employee

Retrieves an employee record by ID.

URL: /employees/:id

Method: GET

Success Response:

. Status: 200 OK

. Body:

     {
     "_id": "611c9f2ee27217002812a372",
     "name": "John Doe",
     "age": 30,
    "contacts": [
    {
      "type": "phone",
      "value": "1234567890"
    },
    {
      "type": "email",
      "value": "johndoe@example.com"
    }
    ],
    "createdAt": "2021-08-18T10:30:38.543Z",
    "updatedAt": "2021-08-18T10:30:38.543Z"
    }

    Update Employee

Updates an existing employee record.

URL: /employees/:id

Method: PUT

Request Body:

    {
    "name": "John Doe",
    "age": 32,
    "contacts": [
    {
      "type": "phone",
      "value": "9876543210"
    },
    {
      "type": "email",
      "value": "johndoe@example.com"
    }
     ]
    }

Success Response:

. Status: 200 OK

. Body:

    {
    "_id": "611c9f2ee27217002812a372",
    "name": "John Doe",
    "age": 32,
    "contacts": [
    {
      "type": "phone",
      "value": "9876543210"
    },
    {
      "type": "email",
      "value": "johndoe@example.com"
    }
     ],
    "createdAt": "2021-08-18T10:30:38.543Z",
    "updatedAt": "2021-08-18T11:45:21.761Z"
    }

Delete Employee

Deletes an employee record.

URL: /employees/:id

Method: DELETE

Success Response:

. Status: 200 OK

. Body:

    {
    "message": "Employee deleted successfully"
    }

List Employees with Pagination

Retrieves a list of employees with pagination.

URL: /employees

Method: GET

Query Parameters:

page (optional): Page number (default: 1)

limit (optional): Number of records per page (default: 10)

Success Response:

. Status: 200 OK

. Body:

      [
    {
    "_id": "611c9f2ee27217002812a372",
    "name": "John Doe",
    "age": 32,
    "contacts": [
      {
        "type": "phone",
        "value": "9876543210"
      },
      {
        "type": "email",
        "value": "johndoe@example.com"
      }
    ],
    "createdAt": "2021-08-18T10:30:38.543Z",
    "updatedAt": "2021-08-18T11:45:21.761Z"
    },

    ]

     // More employee records...

## Setup and Run

Install dependencies:

    npm install

Start the server:

    nodemon/src/index.js

The server will start running on http://localhost:3000.

github link:- https://github.com/satyaveer1994/Infowar-Assignment.git
