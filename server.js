//Install express server
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/strava-access'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/strava-access/' }),
);

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}!`);
});
