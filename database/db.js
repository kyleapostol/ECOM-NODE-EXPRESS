const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DB_CONNECTION, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const dbConnect = async () => {
    try {
      await client.connect();
      console.log('connected to database')
    }catch(error){
        console.log('connection failed')
    }
}

module.exports = dbConnect;
