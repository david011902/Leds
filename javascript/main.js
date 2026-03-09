import { obtenerLeds } from "./data.js";
import { Card } from "./cards.js";
import { Filtro } from "./filters.js";
import { Search } from "./search.js";

async function init() {
    //Usar data para obtener los leds
    const listaLeds = await obtenerLeds();
    //Crear los cards de leds
    Card.crearCard(listaLeds);
    //Filtro por tipo de vehiculo 
    const botonCategoria = document.querySelectorAll('.btn-filtro');
    botonCategoria.forEach(boton => {
        boton.addEventListener('click', () => {
            const categoria = boton.getAttribute('data-categoria');
            const ledsEncontrados = (categoria === 'todos') ? listaLeds : Filtro.filter(categoria, listaLeds);
            Card.crearCard(ledsEncontrados);
        });
    });
}
    //iniciar main
    init();