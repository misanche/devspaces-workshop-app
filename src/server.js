const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Root Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Sample API Route for Lab 3 Debugging Exercise
app.get('/api/data', (req, res) => {
  // Set a breakpoint on line 18 in Lab 3!
  const requestTime = new Date().toISOString();
  const sampleItems = [
    { id: 1, name: 'OpenShift DevSpaces Pod', status: 'Running' },
    { id: 2, name: 'Devfile Engine', status: 'Configured' },
    { id: 3, name: 'Champions Group', status: 'Enabled' }
  ];

  res.json({
    message: 'Hello from inside OpenShift container!',
    timestamp: requestTime,
    items: sampleItems
  });
});

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running inside container on port ${PORT}`);
});
