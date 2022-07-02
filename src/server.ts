import "reflect-metadata"
import 'dotenv/config';
import express from 'express'

import { createConnection } from "./config/typeorm.config";

createConnection()

const app = express()

app.use(express.json())

export { app }