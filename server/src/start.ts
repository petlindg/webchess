import express from "express";
import { chessRouter } from "./router/chess.router";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/", chessRouter);