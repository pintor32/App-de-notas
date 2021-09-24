let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        for (let i = 0;  i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        console.log()
        break;
    case 'crear':
        let newTask = {
            titulo: process.argv[3],
            estado: "pendiente",
        };
        archivoTareas.guardarTarea(newTask);
        break;

    case 'filtrar':
        let estaditoPorFiltrar = process.argv[3];
        let filtradas = archivoTareas.filtrarPorEstado(estaditoPorFiltrar).forEach(function(index){
            console.log(index);
        })
        break;    

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: crear,filtrar,listar');
        break;
}
