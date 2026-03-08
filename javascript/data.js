export async function obtenerLeds(){
    const response = await fetch('./assets/data/leds.json');
    return await response.json();
}