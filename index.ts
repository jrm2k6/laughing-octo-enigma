import { User } from "./main";
import { Sequelize } from "sequelize-typescript";

const sequelize =  new Sequelize({
    dialect: 'postgres',
    database: 'dbtest',
    host: 'localhost',
    username: 'testuser',
    password: 'password',
    port: 5432,
    ssl: false,
})

sequelize.addModels([User])

User.findAll().then((value) => {
    console.log(value);
    process.exit(1);
}).catch(e => console.log(e.message));

