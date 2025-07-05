# Portfolio Projects API

A Node.js/Express API with MongoDB database for managing portfolio projects.

## Setup

### 1. MongoDB Atlas
- Your MongoDB Atlas cluster is already configured
- Connection string: `mongodb+srv://realsajat:asdfg67890@cluster0.tmix0f0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

### 2. Environment Variables
Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb+srv://realsajat:asdfg67890@cluster0.tmix0f0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=development
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Server
```bash
npm start
```

## API Endpoints

### GET /api/projects
Get all general projects

### GET /api/projects/web
Get web development projects

### GET /api/projects/react
Get React development projects

### POST /api/projects
Create a new project

### PUT /api/projects/:id
Update a project

### DELETE /api/projects/:id
Delete a project

## Database Schema

The `Project` model includes:
- `_id` (MongoDB ObjectId)
- `title` (String)
- `description` (String)
- `year` (String)
- `technologies` (Array of Strings)
- `imageUrl` (String)
- `liveUrl` (String, optional)
- `githubUrl` (String, optional)
- `category` (String: 'general', 'web-development', 'react-development')
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

## Production Deployment

For production deployment (e.g., Render, Railway, Heroku):
1. Set up environment variables with your MongoDB Atlas connection string
2. Deploy the backend
3. Update frontend API URLs to use the production backend URL 