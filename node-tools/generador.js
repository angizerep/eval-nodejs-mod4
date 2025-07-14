const fs = require('fs');
const path = require('path');
const evaluarEdad = require('./evaluador');

const rutaArchivo = path.join(__dirname, 'info.txt');

const nombreCompleto = 'Ángeles';
const edad = 4;

// Evaluar la edad sin usar la función importar
//let estatus = edad >= 18 ? 'Mayor de edad' : 'Menor de edad'

let estatus;
try {
    estatus = evaluarEdad(edad);
} catch (err) {
    console.error('Error al evaluar la edad:', err.message);
    process.exit(1);
}

const contenidoTxt =
    `Nombre: ${nombreCompleto}\n` +
    `Edad: ${edad}\n` +
    `Estatus: ${estatus}\n`;

try {
    fs.writeFileSync(rutaArchivo, contenidoTxt, { encoding: 'utf8' });
    console.log('Éxito... info.txt creado correctamente');
} catch (err) {
    console.error('Error... al crear info.txt:', err);
}