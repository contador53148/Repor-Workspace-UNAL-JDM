console.log('Hola Mundo')

import express from 'express'
const app = express()

app.listen(5000)
console.log('El servidor esta escuchando y el puerto es: ', 5000);

app.get('/',(req,res) => res.send ('Hola Mundo'))
