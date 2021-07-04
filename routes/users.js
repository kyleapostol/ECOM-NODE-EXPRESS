import express from 'express';
import { client } from '../database/db.js';

const router = express.Router();


router.get('/', (req, res) => {

    const database = client.db('shoe-ecom');
    const cartCollection = database.collection("cart");

    //cursors are like pointers to the entries
    const cursor = cartCollection.find();
    cursor.toArray()
    .then(item => res.send(item))
    .catch(console.dir)
    // .finally(() => client.close())

})
 
router.get('/:userName', (req, res) => {
    const database = client.db('shoe-ecom');
    const cartCollection = database.collection("cart");

    const query = { name : req.params.userName };

    cartCollection.findOne(query)
    .then(result => {res.send(result); console.log("res",result)})
    .catch(err => console.log(err))
    // .finally(() => client.close());

})


router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);
    res.send(`added ${user.firstName}`)
    console.log(req.body)
})
export default router;