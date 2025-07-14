/**
 * Recibe un número (edad) y devuelve un string
 * indicando si es "Mayor de edad" o "Menor de edad".
 * @param {number} edad
 * @return {string}
 */
function evaluarEdad(edad) {
    if (typeof edad !== 'number') {
        throw new TypeError('La edad debe ser un número');
    }
    return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
}

module.exports = evaluarEdad;
