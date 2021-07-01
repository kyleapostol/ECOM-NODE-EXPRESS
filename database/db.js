import pgk from 'mongodb';
const { MongoClient } = pgk;
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.DB_CONNECTION, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const dbConnect = async() => {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
};

export { dbConnect }; 