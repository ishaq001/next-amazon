import mongoose from 'mongoose';

const connection = {};

/**
 * Connect to the database if it's not already connected
 * @returns Nothing.
 */
async function connect() {
  if (connection.isConnected) {
    console.log('Connected');
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log('use previous connections');
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

/**
 * If the connection is connected, disconnect from the database
 */
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected yet');
    }
  }
}

/**
 * Convert a document from the database to an object
 * @param doc - The document to be converted.
 * @returns a new object that has been converted from a document to an object.
 */
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

export const database = {
  connect,
  disconnect,
  convertDocToObj,
};
