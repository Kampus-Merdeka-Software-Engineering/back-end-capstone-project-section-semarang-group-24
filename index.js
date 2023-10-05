import express from "express";
import PackageRouter from "./Routes/packageroutes.js";

const app = express();
const port = 3000;

app.use(express.static('Pages'));
app.use(express.json());
app.use(PackageRouter);

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});