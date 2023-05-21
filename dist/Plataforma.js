"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombre, sitioWeb, planes, series) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = [];
        this.series = [];
    }
    mostrarSeries() {
        console.log("Series disponibles en la plataforma:");
        for (const serie of this.series) {
            console.log(serie.nombre);
        }
    }
    mostrarDetalleSerie(serie) {
        console.log(`Plataforma: ${this.nombre}`);
        console.log(`Sitio web: ${this.sitioWeb}`);
        console.log('Detalle de la serie:');
        serie.mostrarDetalle();
    }
}
exports.Plataforma = Plataforma;
/*
mostrarDetalleSerie(nombreSerie: string): void {
const serieEncontrada = this.series.find((serie) => serie.nombre === nombreSerie);

if (serieEncontrada) {
console.log("Detalles de la serie " + serieEncontrada.nombre);
console.log("Imagen: " + serieEncontrada.imagen);
console.log("Directores:");
for (const director of serieEncontrada.directores) {
  console.log("- " + director.nombre);
}
console.log("Categorías:");
for (const categoria of serieEncontrada.categorias) {
  console.log("- " + categoria.nombre);
}
console.log("Actores:");
for (const actor of serieEncontrada.actores) {
  console.log("- " + actor.nombre);
}
console.log("Episodios:");
for (const episodio of serieEncontrada.episodios) {
  console.log("- " + episodio.nombre);
}
} else {
console.log("La serie " + nombreSerie + " no se encontró en la plataforma.");
}
}
mostrarCategoriasSerie(nombreSerie: string): void {
const serieEncontrada = this.series.find((serie) => serie.nombre === nombreSerie);

if (serieEncontrada) {
console.log("Categorías de la serie " + serieEncontrada.nombre + ":");
for (const categoria of serieEncontrada.categorias) {
  console.log("- " + categoria.nombre);
}
} else {
console.log("La serie " + nombreSerie + " no se encontró en la plataforma.");
}
}
}
*/
//# sourceMappingURL=Plataforma.js.map