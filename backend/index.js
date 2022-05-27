import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.js";
import ticketRouter from "./routes/tickets.js";
import 'dotenv/config';
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors());
app.use("/user", userRouter);
app.use("/tickets",ticketRouter);


const PORT = process.env.PORT;
const URL = process.env.URL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

