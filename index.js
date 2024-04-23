import express from "express";
import fs from "fs";

const app = express();
const readData = (nombreFichero) => {
  const data = fs.readFileSync(`./db/${nombreFichero}.json`);
  return JSON.parse(data);
};

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/radiacion", (req, res) => {
  const radiacion = readData("RadiacionSolar");
  res.json(radiacion);
});

app.get("/IDA", (req, res) => {
    const radiacion = readData("IDA");
    res.json(radiacion);
  });


app.get("/IDA/residencial", (req, res) => {
    const datosIDA = readData("IDA");
    const datosResidenciales = datosIDA.IDA.residencial;
    res.json(datosResidenciales);
});


app.get("/IDA/permanente", (req, res) => {
    try {
        const datosIDA = readData("IDA");
        const permanente = datosIDA.IDA.permanente;
        
        res.json(permanente);
    } catch (error) {
        res.status(500).json({ error: "Error al leer los datos de IDA permanente" });
    }
});



app.get("/IDA/no_permanente", (req, res) => {
    const datosIDA = readData("IDA");
    const datosNoPermanentes = datosIDA.IDA.no_permanente;
    res.json(datosNoPermanentes);
});

app.listen(3000, () => console.log("Server running on port 3000"));
