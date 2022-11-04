const { boolean, number } = require("yargs");

const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: boolean,
      default: false,
      boolean,
      describe: "Muestra la tabla en consola",
    },
    h: {
      alias: "hasta",
      type: number,
      default: 10,
      demandOption: true,
      describe: "Hasta donde se mostrara la tabla",
    },
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
