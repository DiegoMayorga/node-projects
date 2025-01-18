// Con require importo "fs" (file system).
const fs = require("fs");

// Crear un archivo llamado hello.txt y agregarle el contenido del segundo argumento.
fs.writeFileSync("hello.txt", "Hello from Node.js");
