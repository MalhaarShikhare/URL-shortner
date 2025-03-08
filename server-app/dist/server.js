"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
console.log("MongoDB URI:", process.env.CONNECTION_STRING);
const port = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});
app.listen(port, () => {
    console.log(`server is live on : ${port}`);
});
