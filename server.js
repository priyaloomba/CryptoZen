const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// save data
app.post('/save-contact', (req, res) => {
    const newData = req.body;

    let data = [];
    if (fs.existsSync('data.json')) {
        data = JSON.parse(fs.readFileSync('data.json'));
    }

    data.push(newData);

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    res.json({ message: "Data saved successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});