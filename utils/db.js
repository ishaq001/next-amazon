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

export const database = {
  connect,
  disconnect,
};
