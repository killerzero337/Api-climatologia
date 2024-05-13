## API de Climatología del Instituto Inca Garcilaso Montilla

Esta API proporciona acceso a datos relacionados con la climatología y otros aspectos relevantes del Instituto Inca Garcilaso Montilla.

Url: https://api-climatologia.onrender.com/

### Endpoints Disponibles:

| Método | Endpoint                              | Descripción                                           |
|--------|--------------------------------------|-------------------------------------------------------|
| GET    | /status                              | Comprueba el estado del servidor.                     |
| GET    | /radiacion                           | Obtiene datos de radiación solar.                     |
| GET    | /color                               | Obtiene datos sobre color de cerramientos.            |
| GET    | /oda                                 | Obtiene datos de ODA (Objetivos de Desarrollo del Agua). |
| GET    | /oda/:id                             | Obtiene datos específicos de ODA por su ID.           |
| GET    | /coef                                | Obtiene datos de coeficientes.                        |
| GET    | /vidrios                             | Obtiene datos vidrios.           |
| GET    | /coef/transmision                    | Obtiene datos de coeficientes de transmisión.         |
| GET    | /ida                                 | Obtiene datos de IDA (Índice de Desarrollo del Agua). |
| GET    | /ida/residencial                     | Obtiene datos residenciales de IDA.                  |
| GET    | /ida/residencial/:habitaciones       | Obtiene datos residenciales de IDA por número de habitaciones. |
| GET    | /ida/permanente                      | Obtiene datos permanentes de IDA.                     |
| GET    | /ida/no_permanente                   | Obtiene datos no permanentes de IDA.                  |
| GET    | /localidades                         | Obtiene datos de localidades.                        |
| GET    | /localidades/:id                     | Obtiene datos de una localidad por su ID.            |

## Notas

- Todos los endpoints devuelven datos en formato JSON.
- En caso de error, se devuelve un mensaje de error junto con un código de estado HTTP apropiado.

## Añadidos futuros:

- Se añadirá en un futuro una pagina de inicio donde tendrá un buscador donde podrás introducir los diferentes endpoints y mostrándote un ejemplo de salida de datos.
