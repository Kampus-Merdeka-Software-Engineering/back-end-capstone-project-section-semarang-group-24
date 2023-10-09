import { Sequelize } from "sequelize";

const db = new Sequelize ("railway", "root", "QHZtetETq9URzpLAB539", {
    host: "containers-us-west-70.railway.app",
    port: "6070",
    dialect: "mysql",
});



db.authenticate().then(() => `Database is connected`).catch(error => console.log(error));

export default db;