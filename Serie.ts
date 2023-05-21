import { Director } from './Director.js';
import { Actor } from './Actor.js';
import { Categoria } from './Categoria.js';
import { Episodio } from './Episodio.js';
import { Plataforma } from './Plataforma.js';
export class Serie {
    nombre: string;
    imagen: string;
    directores: Director[];
    categorias: Categoria[];
    actores: Actor[];
    episodios: Episodio[];
    plataformas: Plataforma[];
  
    constructor(nombre: string, imagen: string) {
      this.nombre = nombre;
      this.imagen = imagen;
      this.directores = [];
      this.categorias = [];
      this.actores = [];
      this.episodios = [];
      this.plataformas = [];
    }
    mostrarDetalle(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Imagen: ${this.imagen}`);
    } 
    mostrarCategorias(): void {
      console.log('Categorías:');
      this.categorias.forEach((categoria) => {
        console.log(`- Nombre: ${categoria.nombre}`);
        console.log(`  Descripción: ${categoria.descripcion}`);
      });
    }
    mostrarDirectores(): void {
      console.log('Directores:');
      this.directores.forEach((director) => {
        console.log(`- Nombre: ${director.nombre}`);
        
      });
    }
    mostrarActores(): void {
      console.log('Actores:');
      this.actores.forEach((actor) => {
        console.log(`- Nombre: ${actor.nombre}`);
        
      });
    }
    mostrarDetalleDirector(nombreDirector: string): void {
      const director = this.directores.find((dir) => dir.nombre === nombreDirector);
  
      if (director) {
        console.log('Detalle del director:');
        console.log(`- Nombre: ${director.nombre}`);
        console.log(`  Fotografía: ${director.fotografia}`);
        console.log(`  Descripción: ${director.descripcion}`);
      } else {
        console.log(`No se encontró el director con el nombre '${nombreDirector}'.`);
      }
    }
  
    mostrarDetalleActor(nombreActor: string): void {
      const actor = this.actores.find((act) => act.nombre === nombreActor);
  
      if (actor) {
        console.log('Detalle del actor:');
        console.log(`- Nombre: ${actor.nombre}`);
        console.log(`  Fotografía: ${actor.fotografia}`);
        console.log(`  Descripción: ${actor.descripcion}`);
      } else {
        console.log(`No se encontró el actor con el nombre '${nombreActor}'.`);
      }
    }
    mostrarPlataformas(): void {
      console.log('Plataformas:');
      this.plataformas.forEach((plataforma) => {
        console.log(`- Nombre: ${plataforma.nombre}`);
      });
    }
    mostrarDetallePlataforma(nombrePlataforma: string): void {
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
      } else {
        console.log(`No se encontró la plataforma con el nombre '${nombrePlataforma}'.`);
      }
    }
    agregarCategoria(categoria: Categoria): void {
      this.categorias.push(categoria);
    }
    agregarActor(actor: Actor): void {
      this.actores.push(actor);
    }
    agregarDirector(director: Director): void {
      this.directores.push(director);
  }
  agregarEpisodio(episodio: Episodio): void {
    this.episodios.push(episodio);
  }
  agregarPlataforma(Plataforma: Plataforma): void {
    this.plataformas.push(Plataforma);
  }
}
