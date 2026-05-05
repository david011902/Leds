#Manual de Sockets LED
 
Guía visual e interactiva para identificar el tipo de socket LED que utiliza un vehículo. Filtra por categoría y consulta el nombre del socket con su imagen de referencia.
 
---
 
## ¿Para qué sirve?
 
Al cambiar las luces de un auto o moto a LED, es común no saber qué socket necesitas. Esta app te muestra visualmente los tipos de socket disponibles (H1, H4, H7, 9005, 9006, 9007, H11, entre otros) para que puedas identificar el correcto antes de comprarlo.
 
---
 
## Funcionalidades
 
- Filtrado por categoría: **Todos**, **Automóvil** y **Motocicleta**
- Tarjetas con el nombre del socket y su imagen de referencia
- Interfaz responsive con Bootstrap 5
---
 
## Tecnologías
 
| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la app |
| CSS3 | Estilos personalizados |
| JavaScript (ES Modules) | Lógica y renderizado dinámico |
| Bootstrap 5 | Diseño responsive |
| JSON | Catálogo de sockets |
 
---
 
## Estructura del proyecto
 
```
Leds/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/           # Imágenes de los sockets
├── data/              # Catálogo de sockets en JSON
├── javascript/
│   └── main.js        # Lógica principal
└── index.html
```
 
---
 
## Uso
 
Por ser una app estática (HTML + JS puro), no necesita instalación ni servidor:
 
1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/Leds.git
   ```
2. Abre `index.html` en tu navegador
> También puedes publicarla gratis con **GitHub Pages** y acceder desde cualquier dispositivo.
 
---
 
## Sockets incluidos
 
`H1` · `H4` · `H7` · `H11` · `9005` · `9006` · `9007` · y más...
 
---
 
## Autor

**David Acosta**  
Ingeniero en Sistemas Computacionales  
[GitHub](https://github.com/david011902)
