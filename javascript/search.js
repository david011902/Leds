export class Search{
    static search(led, todos){
        if(!led)
            return todos;   
        const buscar = led.toLowerCase();
        return listaLeds.filter(led => 
            {
                return led.alias.some(alias => alias.toLowerCase().includes(buscar));
            }
        );  
    }
}