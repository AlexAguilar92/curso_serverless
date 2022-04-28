import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Todo, User } from "src/repository";

const dbConnectionHelper = new DataSource({
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "940220",
  database: "todoapp",
  type: "postgres",
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    User,
    Todo
    // __dirname + '/../../../repository/entities/implementation/*.{js,ts}',
    // __dirname + "../../repository/entities/*.ts"

  ]
});

export default dbConnectionHelper;