import express, { urlencoded } from "express";
import connectDb from "./config/dbConfig";
import cors from "cors"; 
import dotenv from "dotenv";
import shortUrl from "./routes/shortUrl"

dotenv.config(); 
connectDb();
console.log("MongoDB URI:", process.env.CONNECTION_STRING);  
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
}));

app.use("/api/",shortUrl);

app.listen(port, () => {
    console.log(`Server is live on: ${port}`);
});
