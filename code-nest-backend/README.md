# test

Generated using **NEMCAF** (Node.js, Express, MongoDB Customizable Authentication Framework).  
This project serves as a boilerplate for creating robust and scalable RESTful APIs.

---

## Features

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **MongoDB**: Database integration with Mongoose ORM.
- **Authentication**: Pre-configured authentication using [JWT/PassportJS].
- **Validation**: Optional integration with Joi for request data validation.
- **Modular Architecture**: Clean and scalable project structure.

---

## Getting Started

Follow these steps to get the project up and running:

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download here](https://nodejs.org)
- **MongoDB**: [Download here](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd <project-name>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/<database-name>
   JWT_SECRET=your_jwt_secret
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```