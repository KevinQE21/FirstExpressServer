const express = require('express') ;
const app = express();
const port = 3000;

//Middleware
//Para determinar los intermediarios 
app.use(express.json());
//Fotos y demas 
app.use(express.urlencoded({ extended = true }))

//Endpoint => Rutas para peticiones
//Estructura => nombreApp + metodo + ruta endpoint 
//              app.metodo('/endpoint', callback(peticion + respuesta){ ... })
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/prueba', (req, res) => {
    res.status(202);
    res.send("Hola desde prueba");
})

//Queries
///marca?nombre=kevin
app.get('/ejemplo', (req, res) => {
    console.log(req.query)
    res.status(202);
    res.send("Hola desde prueba");
})

//Parametros
///marca/zapatos
app.get('/producto/:zapatos/:marca', (req, res) => {
    console.log(req.query)
    res.status(202);
    res.send("Hola desde prueba");
})

//Peticiones POST
//Se le pasan 
app.post('/producto', (req, res) => {
    console.log(req.body);
    res.status(201).send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})