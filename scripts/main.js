import { Plan } from './Plan.js';
import { Plataforma } from './Plataforma.js';
import { Serie } from './Serie.js';
import { Episodio } from './Episodio.js';
import { Director } from './Director.js';
import { Actor } from './Actor.js';
import { Categoria } from './Categoria.js';
const serie1 = new Serie("Nombre de la serie", "ruta/imagen.jpg");
const serie2 = new Serie("Nombre de la serie", "ruta/imagen.jpg");
const actor12 = new Actor("Jorge", "ruta/foto1.jpg", "Descripción del actor 1");
const actor23 = new Actor("Carlos", "ruta/foto2.jpg", "Descripción del actor 2");
serie1.agregarActor(actor12);
serie2.agregarActor(actor23);
serie1.mostrarActores();
serie2.mostrarActores();
// Crear instancias de objetos Director, Actor, Categoría, Episodio y Plataforma
const director1 = new Director("Nombre del Director 1", "ruta/foto1.jpg", "Descripción del director 1");
const director2 = new Director("Nombre del Director 2", "ruta/foto2.jpg", "Descripción del director 2");
const actor1 = new Actor("Nombre del Actor 1", "ruta/foto1.jpg", "Descripción del actor 1");
const actor2 = new Actor("Nombre del Actor 2", "ruta/foto2.jpg", "Descripción del actor 2");
const categoria1 = new Categoria("Categoría 1", "Descripción de la categoría 1");
const categoria2 = new Categoria("Categoría 2", "Descripción de la categoría 2");
const episodio1 = new Episodio("Episodio 1", "Resumen del episodio 1", "Duración del episodio 1");
const episodio2 = new Episodio("Episodio 2", "Resumen del episodio 2", "Duración del episodio 2");
const plan1 = new Plan("Plan 1", 10);
const plataforma1 = new Plataforma("Nombre de la plataforma 1", "www.plataforma1.com", [plan1], [serie1]);
const plataforma2 = new Plataforma("Nombre de la plataforma 2", "www.plataforma2.com", [plan1], [serie1, serie2]);
// Crear una instancia de la clase Serie
// Agregar directores, actores, categorías, episodios y plataformas a la serie
serie1.agregarDirector(director1);
serie1.agregarDirector(director2);
serie1.agregarActor(actor1);
serie1.agregarActor(actor2);
serie1.agregarCategoria(categoria1);
serie1.agregarCategoria(categoria2);
serie1.agregarEpisodio(episodio1);
serie1.agregarEpisodio(episodio2);
serie1.agregarPlataforma(plataforma1);
serie1.agregarPlataforma(plataforma2);
// Mostrar el detalle de la serie
serie1.mostrarDetalle();
// Mostrar las categorías de la serie
serie1.mostrarCategorias();
// Mostrar los directores de la serie
serie1.mostrarDirectores();
// Mostrar los actores de la serie
serie1.mostrarActores();
// Mostrar el detalle de un director específico
serie1.mostrarDetalleDirector("Nombre del Director 1");
// Mostrar el detalle de un actor específico
serie1.mostrarDetalleActor("Nombre del Actor 2");
// Mostrar las plataformas de la serie
serie1.mostrarPlataformas();
// Mostrar el detalle de una plataforma específica
serie1.mostrarDetallePlataforma("Nombre de la plataforma 2");
