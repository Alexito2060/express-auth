const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the main route' }));

router.post('/register', (req, res) => res.status.json({ text: 'Welcome to the register route'}));

router.post('/login', (req, res) => res.status.json({ text: 'Welcome to the login route'}));

module.exports = router;