export class Filtro {
    static filter(vehiculo, listaLeds){
        if(!vehiculo)
            return listaLeds;
        const filtrar = vehiculo.toLowerCase();
        return listaLeds.filter(led => 
            {
                return led.vehiculo.some(v => v.toLowerCase() === filtrar);
            }
        );
    }   
}
