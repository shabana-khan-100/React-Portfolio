# System Patterns: Personal Portfolio

## 1. System Architecture

The portfolio will be a **full-stack application** composed of a React frontend and a Node.js backend. This architecture provides a clear separation of concerns between the client-side and server-side logic.

- **Frontend**: A dynamic and interactive user interface built with React.
- **Backend**: A robust backend powered by Node.js and Express, responsible for handling business logic and data processing.
- **API**: A RESTful API will serve as the communication layer between the frontend and backend.

## 2. Key Technical Decisions

### Database and ORM

- **Database**: **MySQL** will be used as the relational database to store portfolio data, such as project details and contact form submissions.
- **ORM**: **Prisma** will be used as the Object-Relational Mapper (ORM) to simplify database interactions and provide a type-safe way to query the database.

### Contact Form Handling

The contact form will be handled by the backend:

- The React frontend will capture the form data and send it to a dedicated API endpoint.
- The Express backend will receive the data, validate it, and use Prisma to save the submission to the MySQL database.
