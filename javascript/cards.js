export class Card{
    static crearCard(leds){
       const contenedor = document.getElementById('contenedor-leds');
       if(leds.length === 0){
        contenedor.innerHTML = 
        `<div class="alert alert-warning w-100 text-center" role="alert">
            <p>No se encontraron resultados para tu búsqueda.</p>
        </div>`;
        return;
       }

       //Card boostrap
       const cardBoostrap = leds.map(led =>
        `
        <div class="col-12 col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${led.imagen[0]}" class="card-img-top" alt="${led.nombre}" style="height: 200px; width: 100%; object-fit: contain;">
                <div class="card-body p-3 text-center">
                    <h5 class="card-title">${led.nombre}</h5>
                    <p class="card-text">Tipo de luz: ${led.tipo_luz}</p>
                    <p class="card-text">Vehículo: ${led.vehiculo.join(', ')}</p>
                    <p class="card-text">Ubicación: ${led.ubicacion}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${led.nombre.replace(/\s/g, '')}">Ver más</button>
                </div>
            </div>
        </div>
        `).join('');
        //Maneno del dom
        contenedor.innerHTML = cardBoostrap;
    }
}