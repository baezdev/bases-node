const fs = require("fs"); //File System

const crearArchivoDeMultiplicacion = async (base = 1, hasta, listar) => {
  try {
    let salida = `Tabla del ${base}\n`;
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./files/tabla-${base}.txt`, salida);
    return "Archivo creado";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoDeMultiplicacion,
};
