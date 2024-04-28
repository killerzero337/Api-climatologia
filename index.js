import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors())
const readData = (nombreFichero) => {
  const data = fs.readFileSync(`./db/${nombreFichero}.json`);
  return JSON.parse(data);
};



// Modificar el raiz para en un futuro añadir una ruta hacia una web con documentacion de API.
// quizas pueda hacer eso en react o incluso puedo practicar angular usando Typescript
app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API de climatologia de el instituto Inca Garcilaso Montilla."
  );
});

app.get("/status", (req, res) => {
  res.send("OK");
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

app.get("/color", (req, res) => {
  try {
    const color = readData("ColorCerramientos");

    res.json(color);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos de radiación solar" });
  }
});

app.get("/oda", (req, res) => {
  try {
    const datosOda = readData("Oda");

    res.json(datosOda);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de IDA" });
  }
});

app.get("/oda/:id", (req, res) => {
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

app.get("/coef", (req, res) => {
  try {
    const coefData = readData("coef");
    res.json(coefData);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de Coef.json" });
  }
});

app.get("/coef/vidrios", (req, res) => {
  try {
    const coef = readData("coef");
    const coefDatos = coef.vidrios;
    res.json(coefDatos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos residenciales de IDA" });
  }
});

app.get("/coef/transmision", (req, res) => {
  try {
    const coef = readData("coef");
    const coefDatos = coef.transmision;
    res.json(coefDatos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos residenciales de IDA" });
  }
});

app.get("/ida", (req, res) => {
  try {
    const radiacion = readData("IDA");
    res.json(radiacion);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos de IDA" });
  }
});

app.get("/ida/residencial", (req, res) => {
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

app.get("/ida/residencial/:habitaciones", (req, res) => {
  try {
    const datosIDA = readData("IDA");
    const residencialesIDA = datosIDA.IDA.residencial;
    const habitaciones = residencialesIDA.find(
      (residencial) =>
        residencial.habitaciones === parseInt(req.params.habitaciones)
    );
    if (habitaciones) {
      res.json(habitaciones);
    } else {
      res
        .status(404)
        .json({
          error:
            "Datos residenciales para el número de habitaciones especificado no encontrados en IDA",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al leer los datos residenciales de IDA" });
  }
});

app.get("/ida/permanente", (req, res) => {
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

app.get("/ida/no_permanente", (req, res) => {
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
