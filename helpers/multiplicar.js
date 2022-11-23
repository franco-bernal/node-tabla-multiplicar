const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "", salidaConsola = "";
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

function clearFiles(clearFiles) {
    if (clearFiles == true) {
        const files = fs.readdirSync('./salida')
        if (files.length > 0) {
        const deleted = [];
        const noDeleted = [];
        files.forEach(file => {
            if (file.includes('tabla')) {
                fs.rename('./salida/' + file, './salida/papelera/' + file, (err) => {
                    if (err) throw err;
                });
                deleted.push(file);
            }
            else {
                noDeleted.push(file);
            }
        });
        console.log("No movidos:");
        console.log(...noDeleted);
        console.log("En papelera:");
        console.log(...deleted);
    }else{
        console.log("no hay archivos para borrar")
    }
    }
}
function clearPapelera(clearPapelera) {
    if (clearPapelera == true) {
        const files = fs.readdirSync('./salida/papelera/')
        if (files.length > 0) {
            const deleted = [];
            const noDeleted = [];
            files.forEach(file => {
                if (file.includes('tabla')) {
                    fs.unlink('./salida/papelera/' + file, function (err) {
                        if (err) {
                            console.error(err);
                        }
                    });
                    deleted.push(file);
                }
                else {
                    noDeleted.push(file);
                }
            });
            console.log("No borrados:");
            console.log(...noDeleted);
            console.log("Borrados:");
            console.log(...deleted);
        }else{
            console.log("papelera limpia")
        }

    }
}


module.exports = {
    crearArchivo,
    clearFiles,
    clearPapelera,
}