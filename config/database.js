import { Sequelize } from "sequelize";

const db = new Sequelize ("sendpackages_db", "root", "venska18-", {
    host: "localhost",
    dialect: "mysql",
});

db.authenticate().then(() => `Database is connected`).catch(error => console.log(error));

export default db;