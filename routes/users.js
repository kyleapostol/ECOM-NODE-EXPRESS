import express from 'express';

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
    res.send(users)
})


router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);
    res.send(`added ${user.firstName}`)
    console.log(req.body)
})
export default router;