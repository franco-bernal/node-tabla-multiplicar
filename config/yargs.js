const argv = require('yargs')
    .option('c', {
        alias: 'createFiles',
        type: 'boolean',
        default: false,
        describe: 'decide si crear archivo, si no está este comando no se creará ninguno'
    })
    .option('b', {
        alias: 'base',
        type: 'number',
        default: 5,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'define el límite de la tabla de multiplicar'
    })
    .option('cf', {
        alias: 'clearFiles',
        type: 'boolean',
        default: false,
        describe: 'mover a la papelera'
    })
    .option('cp', {
        alias: 'clearPapelera',
        type: 'boolean',
        default: false,
        describe: 'borrar todos los archivos de tablas de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'.red;
        }
        if (isNaN(argv.hasta)) {
            throw 'límite debe ser de tipo numero'.red;
        }
        return true;
    })
    .argv;

module.exports = argv;