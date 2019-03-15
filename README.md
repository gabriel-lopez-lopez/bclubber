bclubber demo
=============

## Demo

[https://gabriel-lopez-lopez.github.io/bclubber/](https://gabriel-lopez-lopez.github.io/bclubber/)

En respuesta a la prueba:

- 1/ Se entrega un archivo .sketch que contiene un pequeño módulo que se deberá maquetar.
- 2/ En el archivo de sketch hay 2 artboards con 2 medidas. 320 px y 1280px.
- 3/ La maquetación debe ser responsive. Debe tener 4 break points:

    • 320px
    • 640px
    • 1024px
    • 1280px

- 4/ Se enviará un archivo HTML con los css para que nuestro equipo de desarrollo inspeccione el código para verificar su limpieza y el equipo de diseño verifique si se han respetado medidas, colores, etc.

Se valorará mucho, la integración de pequeños efectos JS en elementos y objetos de las estructuras de los componentes. 
 

### ¿Qué incluye?

* React, Sintaxis ES6, Babel, Webpack 4.
* Autoprefixed CSS mediante PostCSS.
* Servidor de desarrollo webpack-dev con soporte ESLint para advertir de los errores comunes.
* Archivos de configuración para entornos de desarrollo y producción para Webpack 4 que permiten empaquetar las construcciones, CSS, JS, imágenes, etc.

Las diferentes configuraciones de empaquetado, así como el dev-server para Webpack 4 han sido realizadas específicamente.

Se necesita tener **Node >= 6** en la máquina de desarrollo.

### Instalación de dependencias

Deben instalarse las dependencias con npm antes de poder lanzar cualquier script del proyecto.
Instalarlas con:

```sh
    $ npm install
```

### scripts disponibles

**npm start**

Ejecuta la aplicación en modo de desarrollo en [http://localhost:3001](http://localhost:3001)

La página se volverá a cargar si se realizan modificaciones.
También se verá cualquier error de sintaxis del código en la consola.

**npm run build**

Crea la aplicación para producción en el directorio **build**
Optimiza la construcción para obtener el mejor rendimiento.
La compilación se minimiza y los nombres de archivos empaquetados incluyen valores hash.

**npm run deploy**

Realiza **npm run build** y publica la construcción de producción en **GitHub pages**, realizando previamente una limpieza en la caché (evita errores colaterales)

  **Otros scripts secundarios**

  - **npm run deploy:gh-pages**

    Publica una construcción previa de producción en **GitHub pages**

  - **npm run deploy:cleanup**

    Limpia caché antes de publicar en **GitHub pages**

  - **npm run deploy:start**

    Realiza la publicación en **GitHub pages**