const { Router } = require('express');
const Message = require('../models/Message');
const router = Router();
const parser = require('body-parser');

router.post('/messages',
    parser.text(),
    async (req, res) => {
  try {
    const { name, text } = req.body;

    const message = new Message({ name, text });

    await message.save();

    res.status(201).json({ message: 'Success' })

  } catch (e) {
    res.status(500).json({ message: 'Something wrong' });
  }
})

router.get('/messages', async (req, res) => {
  const messages = await Message.find({}, (err, data) => {
    console.log('>>>> ' + data)
  });

  res.send(messages)
});

module.exports = router;