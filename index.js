const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

const users=[
    {id: 1, name: "abul", job: "student", mobile: "01821287465", email: 'abul@gmail.com'},
    {id: 2, name: "kbul", job: "driver", mobile: "01721287465", email: 'kbul@gmail.com'},
    {id: 3, name: "mbul", job: "sales man", mobile: "01321287465", email: 'mbul@gmail.com'},
    {id: 4, name: "Hbul", job: "teacher", mobile: "01621287465", email: 'hbul@gmail.com'},
    {id: 5, name: "Pbul", job: "tokai", mobile: "01521287465", email: 'pbul@gmail.com'}
]
const fruits=[
    {id: 1, name: "mango", color: "green", price: "65"},
    {id: 2, name: "watermilo", color: "red", price: "45"},
    {id: 3, name: "apple", color: "white", price: "68"},
    {id: 4, name: "tango", color: "orange", price: "85"},
    {id: 5, name: "orange", job: "orange", price: "58"}
]

app.get ('/', (req, res) => {
    res.send('Look in this site..Hello, I can code nodeJs now')
});

app.get ('/fruits', (req, res) => {
    res.send(fruits);
});

app.get ('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users);
    }
    
});

app.get ('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, ()=>{
    console.log("Listen to port", port);
})