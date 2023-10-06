import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const sendpackage = db.define("packages", {
    idreceipt: {
        type: DataTypes.STRING,
    },
    namesender: {
        type: DataTypes.STRING,
    },
    namerecipient: {
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
    cityto: {
        type: DataTypes.STRING,
    },
    packageservice: {
        type: DataTypes.STRING,
    },
    itemweight: {
        type: DataTypes.STRING,
    },
    totalprice: {
        type: DataTypes.STRING,
    },
});

export default sendpackage;

(async () => {
    await db.sync();
})();