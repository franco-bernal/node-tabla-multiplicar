const { crearArchivo, clearFiles, clearPapelera } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();

console.log()

//comando: -c
if (argv.c == true) {
    crearArchivo(argv.base, argv.listar, argv.hasta)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err));
    for (let i = 0; i < 20; i++) {
        crearArchivo(i, argv.listar, argv.hasta)
            .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
            .catch(err => console.log(err));
    }
}
//comando: -cf
clearFiles(argv.clearFiles)

//comando: -cp
clearPapelera(argv.clearPapelera)