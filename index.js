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
  try {
    const radiacion = readData("RadiacionSolar");
    res.json(radiacion);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos de radiación solar" });
  }
});

app.get("/ODA", (req, res) => {
  try {
    const datosOda = readData("Oda");
    
    res.json(datosOda);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de IDA" });
  }
});

app.get('/ODA/:id', (req, res) => {
  try {
    const Oda = readData("Oda");
    const oda = Oda[req.params.id];
    if (oda) {
      res.json(oda);
    } else {
      res.status(404).json({ error: "ODA no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de ODA" });
  }
});


app.get("/IDA", (req, res) => {
  try {
    const radiacion = readData("IDA");
    res.json(radiacion);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de IDA" });
  }
});

app.get("/IDA/residencial", (req, res) => {
  try {
    const datosIDA = readData("IDA");
    const datosResidenciales = datosIDA.IDA.residencial;
    res.json(datosResidenciales);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos residenciales de IDA" });
  }
});

app.get("/IDA/permanente", (req, res) => {
  try {
    const datosIDA = readData("IDA");
    const permanente = datosIDA.IDA.permanente;

    res.json(permanente);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos de IDA permanente" });
  }
});

app.get("/IDA/no_permanente", (req, res) => {
  const datosIDA = readData("IDA");
  const datosNoPermanentes = datosIDA.IDA.no_permanente;
  res.json(datosNoPermanentes);
});

app.get("/localidades", (req, res) => {
  const localidades = readData("localidades");
  res.json(localidades);
});

app.get("/localidades/:id", (req, res) => {
  try {
    const localidades = readData("localidades");
    const localidad = localidades.find(
      (localidad) => localidad.id === parseInt(req.params.id)
    );

    if (localidad) {
      res.json(localidad);
    } else {
      res.status(404).json({ error: "Localidad no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos de las localidades" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
