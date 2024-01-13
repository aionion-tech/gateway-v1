import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import { envConfig } from "./config";
import router from "./routers";
import { rootError } from "./middlewares/rootError.middleware";

const app = express();

// app.use(express.json());

app.use(router);

app.get("/echo", async (req: Request, res: Response) => {
  try {
    res.status(200).send("Hey gateway!");
  } catch (error) {
    console.log("whats wrong", error);
  }
});

app.use(rootError);

app.listen(envConfig.SERVER.PORT, async () => {
  try {
    console.log(
      `[server]: Server is running at http://localhost:${envConfig.SERVER.PORT}`
    );
  } catch (error) {
    console.log("hello ?", error);
  }
});
