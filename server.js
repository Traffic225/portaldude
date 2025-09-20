const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Ensure logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
const expressLog = path.join(logsDir, 'express.log');

// Simple request logger: console + append to file
app.use((req, res, next) => {
  const entry = `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${req.ip}\n`;
  process.stdout.write(entry);
  fs.appendFile(expressLog, entry, (err) => { if (err) process.stderr.write('Failed to write express log: '+err+'\n'); });
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from Express' });
});

app.listen(port, () => console.log(`Express running on http://localhost:${port}`));
