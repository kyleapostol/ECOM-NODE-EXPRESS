import express from 'express';
import { client } from '../database/db.js';


const router = express.Router();

const users = [
    {
        firstName : 'John',
        lastName : 'Doe',
        age : 26
    },
    {
        firstName : 'Jane',
        lastName : 'Doe',
        age : 27
    },
    {
        firstName : 'Jack',
        lastName : 'Doe',
        age : 28
    },

]




router.get('/', (req, res) => {
    const database = client.db('shoe-ecom');
    const cart = database.collection("cart");
    //cursors are like pointers to the entries
    const cursor = cart.find();
    cursor.toArray()
    .then(item => res.send(item))


    // cursor.forEach( item => arr.push(item));

    // res.send(arr)
})
 

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);
    res.send(`added ${user.firstName}`)
    console.log(req.body)
})
export default router;