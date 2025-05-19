// LLamado e Inicialización de Dependencias
const express = require('express'); // Se incluye el Framework Express
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); // Instancia de Express

// Configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); 
}
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev')); // combined
app.use(bodyParser.urlencoded({ extended: false })); // Para recibir datos por POST
app.use(bodyParser.json()); // Para recibir formato Json

// Configuración de rutas del API
app.use('/api/v1/users', require('./api/v1/routes/users.routes'));

// app.get('/', (req, res) => {
//     res.send({
//         status: 200,
//         message : 'Hello API - NodeJs'
//     }); 
// });
// app.get('/saludos', (req, res) => {
//     res.send({
//         status: 200,
//         message : 'Hola, desde NodeJs'
//     }); 
// });
// app.post('/testNewUser', (req, res) => {
//     const { nombre, email, direccion, empresa} = req.body;
//     console.log(`Nombre: ${nombre}`);
//     console.log(`Email: ${email}`);
//     console.log(`Direccion: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);
//     res.send({
//         status: 201,
//         message: 'Usuario creado exitosamente!'
//     });
// });

// Se inicia el servidor en el puerto 4000
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} 🤖🩻`);
});