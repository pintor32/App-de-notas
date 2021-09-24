const fs = require('fs');
const base = require("./tareas.json")

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tareas){
        let datos = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, datos)
    },
    guardarTarea: function(tareaNueva){
        const db = this.leer();
        db.push(tareaNueva);
        const guardar = this.escribirJSON(db);
    },   
    filtrarPorEstado: function(estadito){
    let actuales = base.filter(function(tarea){
        return tarea.estado == estadito;
    })
    return actuales
    }
}


module.exports = archivoTareas