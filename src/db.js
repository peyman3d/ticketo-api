/*-----------------------------------------------------------------
- Database connection
-----------------------------------------------------------------*/
const mongoose = require('mongoose');

// Plugins
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseUniqueValidator = require('mongoose-unique-validator');

// Connect to database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// Register Plugins
mongoose.plugin(mongoosePaginate);
mongoose.plugin(mongooseUniqueValidator);

// Hide `__v` from output