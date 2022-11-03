const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
    try {
        let salida="",salidaConsola="";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            salidaConsola += `${base} ${'x'.rainbow} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log(salidaConsola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}