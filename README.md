# Greeting App

A web application built with React (Vite) on the frontend and Node.js/Express on the backend.

## Project Structure

```
greeting-app/
├── client/           # React frontend (Vite)
│   ├── public/       # Static assets
│   ├── src/          # React source code
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── backend/          # Node.js/Express backend
│   ├── middleware/   # Custom middleware
│   ├── package.json  # Backend dependencies
│   └── server.js     # Entry point
└── README.md         # This file
```

## Prerequisites

- Node.js (v16.0.0 or later)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory:

```bash
touch .env
```

4. Add the following environment variables to the `.env` file:

```
PORT=8000
NODE_ENV=development
```

5. Start the backend server:

```bash
npm run dev
```

The server will start on port 8000 (http://localhost:8000).

### Frontend Setup

1. Open a new terminal window and navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the Vite development server:

```bash
npm run dev
```

The React application will start on port 5173 (http://localhost:5173).

## Development

- Frontend code is in the `client/src` directory
- Backend API routes are in the `backend/routes` directory

## Building for Production

### Build the frontend

```bash
cd client
npm run build
```

This will create a production build in the `client/dist` directory.

### Build the backend

```bash
cd backend
npm nodemon server.js
```

## Deployment

Instructions for deployment will depend on your hosting platform of choice.
