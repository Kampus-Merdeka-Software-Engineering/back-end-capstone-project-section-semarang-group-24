import { Sequelize } from "sequelize";

const db = new Sequelize ("railway", "root", "CUgx3tiipnshfNrOAp7g", {
    host: "containers-us-west-57.railway.app",
    port: "6725",
    dialect: "mysql",
});



db.authenticate().then(() => `Database is connected`).catch(error => console.log(error));

export default db;