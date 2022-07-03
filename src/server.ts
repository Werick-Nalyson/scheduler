import "reflect-metadata"
import 'dotenv/config';
import express from 'express'

import { createConnection } from "./config/typeorm.config";
import routes from "./routes";

createConnection()

const app = express()

app.use(express.json())

app.use(routes)

export { app }