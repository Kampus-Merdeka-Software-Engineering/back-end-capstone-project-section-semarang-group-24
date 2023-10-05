import { Sequelize } from "sequelize";

const db = new Sequelize("db_sendpackages", "root", "venska18-", {
    host: "localhost",
    dialect: "mysql"
});

db.authenticate()
.then(() => `The Database is Connected`)
.catch((error) => console.log(error));

export default db;