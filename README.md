# HerPath

HerPath is a full-stack web application designed to provide career and job opportunities tailored to individuals based on their educational qualifications. The platform aims to bridge the gap between education and employment by offering insights into potential career paths and job openings in both private and government sectors.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Career Opportunities**: Discover career options based on your education level.
- **Job Opportunities**: Access job listings in both private and government sectors according to your qualifications.
- **User Module**: Users can retrieve job openings and student opportunities.
- **Admin Module**: Admins can insert, update, and delete data, and manage job searches.

## Technologies Used
### Frontend
- React.js

### Backend
- Node.js
- Express.js

### Database
- MySQL
- XAMPP server

## Installation
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js
- XAMPP server
- MySQL

### Steps
1. Clone the repository
    ```bash
    git clone https://github.com/your-username/herpath.git
    ```
2. Navigate to the project directory
    ```bash
    cd herpath
    ```
3. Install the frontend dependencies
    ```bash
    cd client
    npm install
    ```
4. Install the backend dependencies
    ```bash
    cd ../server
    npm install
    ```
5. Configure the database
    - Start the XAMPP server.
    - Create a new database in MySQL.
    - Update the database configuration in `server/config/db.js`.

6. Start the application
    ```bash
    # Start the backend server
    cd server
    npm start

    # Start the frontend server
    cd ../client
    npm start
    ```

## Usage
1. Visit `http://localhost:3000` to access the frontend.
2. Use the admin module to manage career and job data.
3. Use the user module to explore career paths and job opportunities.

## Contributing
Contributions are what make the open-source community such an amazing place to be, learn, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
- **Name** - [21b01a0532@svecw.edu.in](mailto:21b01a0532@svecw.edu.in)
- **Project Link**: [https://github.com/Sathvika-15/herpath](https://github.com/Sathvika-15/herpath)
