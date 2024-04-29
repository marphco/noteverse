const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Path to the client's dist directory
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');

// Serve static files directly
app.use('/client/dist', express.static(clientDistPath));

// Serve the main HTML file for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.resolve(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
