const path = require('path');

module.exports = (app) => {
  // Serve the index.html file for the root path or any unknown route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
  });
};
