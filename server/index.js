import express from "express";
import cors from "cors";
import http from "node:http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
const httpServer = http.Server(app);
const socketIO = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from chatapp" });
});

httpServer.listen(PORT, () => console.log(`server is up on port:${PORT}`));
