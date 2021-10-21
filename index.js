const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from node i will try');
});


const users = [
    { id: 0, name: "sabana", email: "sabana@gmail.com", phone: "01025461385" },
    { id: 1, name: "sabnoor", email: "sabnoor@gmail.com", phone: "01025456385" },
    { id: 2, name: "srabonti", email: "srabonti@gmail.com", phone: "01025129385" },
    { id: 3, name: "sornali", email: "sornali@gmail.com", phone: "01021871385" },
    { id: 4, name: "upoma", email: "upuma@gmail.com", phone: "01025147385" },
    { id: 5, name: "nirupoma", email: "nirupoma@gmail.com", phone: "01745861385" },
    { id: 6, name: "obonti", email: "obonti@gmail.com", phone: "01026971385" },
    { id: 7, name: "rani", email: "rani@gmail.com", phone: "010214581385" },
]

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
});

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        return res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening', port);
});