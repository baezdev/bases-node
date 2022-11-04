const { crearArchivoDeMultiplicacion } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

/* Forma poco recomendada */
/* const [, , bandera = "base=1"] = process.argv;
const [, base = 1] = bandera.split("="); */

crearArchivoDeMultiplicacion(argv.b, argv.h, argv.l)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
