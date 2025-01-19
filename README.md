Wallet Backend API
This is the backend service for the Wallet Application. It is built with Node.js, Express.js, and uses PostgreSQL for database management.

Setup Instructions
Prerequisites
Node.js (version 18+)
PostgreSQL
npm or yarn
2. Install dependencies: npm install
3. Configure environment variables: Create a .env file in the root directory and add the following: PORT=5000
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=wallet
DB_PORT=5432
4. Set up the database:
Ensure PostgreSQL is installed and running.
Create a database named wallet:
CREATE DATABASE wallet;
5. Start the server:
npm start
