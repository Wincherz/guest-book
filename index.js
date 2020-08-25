const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json({ extended: true }))

app.use(require('cors')());

app.use('/api', require('./routes/messages.route'))

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT} port`)
    })
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

start()
