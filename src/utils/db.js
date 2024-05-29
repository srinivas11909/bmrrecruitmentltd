import { connect, connection } from "mongoose";

const conn = {
    isConnected: false,
  };
  
  export async function dbConnect() {
    if (conn.isConnected) {
      return;
    }
  
    const db = await connect(
      process.env.MONGODB_URI || "mongodb://localhost:3000/nextjs"
    );
    // console.log(db.connection.db.databaseName);MWLxJIdXvIGbrXRk
    conn.isConnected = db.connections[0].readyState;
  }
  
  connection.on("connected", () => console.log("Mongodb connected to db"));
  
  connection.on("error", (err) => console.error("Mongodb Errro:", err.message));