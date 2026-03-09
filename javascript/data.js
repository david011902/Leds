export async function obtenerLeds(){
    try {
        const response = await fetch('./data/leds.json');
    if(!response.ok){
        throw new Error(`Error al cargar los datos de los LEDs: ${response.status}`);
    }
    const data = await response.json();
    return data.luces_led;
    } catch (error) {
        console.error('Error al obtener los datos de los LEDs:', error);
        return [];
    }
    
}