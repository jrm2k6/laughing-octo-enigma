import { User } from "./models";
import { Sequelize } from "sequelize-typescript";

const sequelize =  new Sequelize({
    dialect: 'postgres',
    database: 'dbtest',
    host: 'localhost',
    username: 'testuser',
    password: 'password',
    port: 5432,
    ssl: false,
    // dialect: 'sqlite',
    // storage: 'database.sqlite',
    models: [User]
});

(async () => {
    let users = await User.findAll();
    for (let user of users) {
        console.log(user.name);
    }

    
    process.exit(1);


})();

// sequelize.addModels([User])


