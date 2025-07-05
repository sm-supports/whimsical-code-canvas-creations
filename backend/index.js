const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const Project = require('./models/Project');
const seedData = require('./seeders/seedData');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Seed database on startup
seedData();

// API Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({ category: 'general' }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects/web', async (req, res) => {
  try {
    const projects = await Project.find({ category: 'web-development' }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching web projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects/react', async (req, res) => {
  try {
    const projects = await Project.find({ category: 'react-development' }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching react projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add new project
app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Update project
app.put('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Delete project
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
}); 