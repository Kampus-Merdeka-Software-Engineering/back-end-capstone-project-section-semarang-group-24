import { Sequelize } from "sequelize";

const db = new Sequelize ("railway", "root", "f0gThAUFvkmMDkeiah1f", {
    host: "containers-us-west-88.railway.app",
    port: "5590",
    dialect: "mysql",
});



db.authenticate().then(() => `Database is connected`).catch(error => console.log(error));

export default db;