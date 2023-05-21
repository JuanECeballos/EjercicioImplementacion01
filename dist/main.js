"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Serie_js_1 = require("./Serie.js");
const Actor_js_1 = require("./Actor.js");
const serie = new Serie_js_1.Serie("Nombre de la serie", "ruta/imagen.jpg");
const actor1 = new Actor_js_1.Actor("Jorge", "ruta/foto1.jpg", "Descripción del actor 1");
const actor2 = new Actor_js_1.Actor("Carlos", "ruta/foto2.jpg", "Descripción del actor 2");
serie.agregarActor(actor1);
serie.agregarActor(actor2);
serie.mostrarActores();
//# sourceMappingURL=main.js.map