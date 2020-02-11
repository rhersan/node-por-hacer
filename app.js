// by: Ing.Ricardo Hernández Sanatiago
// phone: 5579953424
// email: hersanoficial@gmail.com
// te amo angelica
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch(comando){

    case 'crear':
       let tarea = porHacer.crear( argv.descripcion);
       console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('============Por Hacer=============='.green);
            console.log('Tarea: ' + tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log('==================================='.green);
        }
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break; 
    
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        borrar == true ? console.log('Correcto!'.green) : console.log('No existe la tarea'.red);
    break;

    default:
        console.log('Comando no reconocido');
        break;
}