// src/services/server/mongo.ts
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI as string;

const clientPromise = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectMongo() {
  try {
    await clientPromise.connect();
    await clientPromise.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
  return clientPromise;
}

export async function getDb(dbName: string = "mydb") {
  await connectMongo();
  return clientPromise.db(dbName);
}

export default clientPromise;

