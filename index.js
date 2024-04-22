import express from "express";
import fs from "fs";

const app = express();
const readData = (nombreFichero) => {
    const data = fs.readFileSync(`${nombreFichero}.json`);
    return JSON.parse(data);
}


app.get("/", (req, res) => {
    res.send("Hola mundo");
})

app.get("/radiacion", (req, res) => {
    const radiacion = readData("RadiacionSolar");
    res.json(radiacion);
})


app.listen(3000, () => console.log("Server running on port 3000"));
