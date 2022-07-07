import { User } from "../modules/users/infra/typeorm/entities/User";
import { DataSource } from "typeorm";
import { Scheduler } from "../modules/schedules/infra/typeorm/entities/Scheduler";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [User, Scheduler],
})

export function createConnection () {
    AppDataSource.initialize()
        .then(() => {
            console.log("Database connected.")
        })
        .catch((error) => console.log(error))
}