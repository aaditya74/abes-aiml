import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to Express");
});

app.use(express.json());

app.post('/users', (req, res) => {
    const { name } = req.body;
    res.send(`My name is ${name}`);
});

app.get('/api/:name/:rollno', (req, res) => {
    try {
        const { name, rollno } = req.params;
        res.send(`Welcome ${name} and your roll no. is ${rollno}`);
    } catch (error) {
        console.log(`Error is: ${error.message}`);
    }
});


/*
app.get('/api', (req, res) => {
    try {
        const { name, rollno } = req.query;
        if (!name) {
            return res.status(400).send("Name is required");
        } else {
            res.send(`Welcome to ABES: ${name} and roll no. is ${rollno}`);
        }
    } catch (error) {
        console.log(error.message);
    }
});
*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
