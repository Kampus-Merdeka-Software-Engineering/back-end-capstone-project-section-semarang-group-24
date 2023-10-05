import { Sequelize, DataTypes } from "sequelize";

import db from "../config/database.js";

const sendpackage = db.define("package", {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    cityfrom: {
        type: DataTypes.STRING,
    },
    citydestination: {
        type: DataTypes.STRING,
    },
    itemweight: {
        type: DataTypes.STRING,
    },
});

export default sendpackage;

(async () => {
    await db.sync();
})();