import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import * as express from "express";
const app = express();
import webv1 from "../route/v1";
import notFound from "../middleware/notFound";
import * as cors from "cors";

const port = process.env.PORT || 3000;



createConnection()
  .then(async (connection) => {
    app.use(cors());
    app.use(express.json());
    app.use("/v1", webv1);
    app.use(notFound);
    app.listen(port, () => console.log(`Running on ${port}`));
  })
  .catch((error) => console.log(error));
