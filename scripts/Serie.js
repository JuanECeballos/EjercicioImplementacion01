export class Serie {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.directores = [];
        this.categorias = [];
        this.actores = [];
        this.episodios = [];
        this.plataformas = [];
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Imagen: ${this.imagen}`);
    }
    mostrarCategorias() {
        console.log('Categorías:');
        this.categorias.forEach((categoria) => {
            console.log(`- Nombre: ${categoria.nombre}`);
            console.log(`  Descripción: ${categoria.descripcion}`);
        });
    }
    mostrarDirectores() {
        console.log('Directores:');
        this.directores.forEach((director) => {
            console.log(`- Nombre: ${director.nombre}`);
        });
    }
    mostrarActores() {
        console.log('Actores:');
        this.actores.forEach((actor) => {
            console.log(`- Nombre: ${actor.nombre}`);
        });
    }
    mostrarDetalleDirector(nombreDirector) {
        const director = this.directores.find((dir) => dir.nombre === nombreDirector);
        if (director) {
            console.log('Detalle del director:');
            console.log(`- Nombre: ${director.nombre}`);
            console.log(`  Fotografía: ${director.fotografia}`);
            console.log(`  Descripción: ${director.descripcion}`);
        }
        else {
            console.log(`No se encontró el director con el nombre '${nombreDirector}'.`);
        }
    }
    mostrarDetalleActor(nombreActor) {
        const actor = this.actores.find((act) => act.nombre === nombreActor);
        if (actor) {
            console.log('Detalle del actor:');
            console.log(`- Nombre: ${actor.nombre}`);
            console.log(`  Fotografía: ${actor.fotografia}`);
            console.log(`  Descripción: ${actor.descripcion}`);
        }
        else {
            console.log(`No se encontró el actor con el nombre '${nombreActor}'.`);
        }
    }
    mostrarPlataformas() {
        console.log('Plataformas:');
        this.plataformas.forEach((plataforma) => {
            console.log(`- Nombre: ${plataforma.nombre}`);
        });
    }
    mostrarDetallePlataforma(nombrePlataforma) {
        const plataforma = this.plataformas.find((plataforma) => plataforma.nombre === nombrePlataforma);
        if (plataforma) {
            console.log('Detalle de la plataforma:');
            console.log(`- Nombre: ${plataforma.nombre}`);
            console.log(`  Sitio web: ${plataforma.sitioWeb}`);
            console.log('  Planes:');
            plataforma.planes.forEach((plan) => {
                console.log(`  - Nombre: ${plan.nombre}`);
                console.log(`    Precio: ${plan.precio}`);
            });
        }
        else {
            console.log(`No se encontró la plataforma con el nombre '${nombrePlataforma}'.`);
        }
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarDirector(director) {
        this.directores.push(director);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(Plataforma) {
        this.plataformas.push(Plataforma);
    }
}
