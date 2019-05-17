# Hits Server NodeJS

API REST con Nodejs/Express y MongoDB.

Encargada de consumir mediante Cron Job la API de Hacker News y almacenar en la BD (Base de Datos) los registros obtenidos (Hits).

Como API REST permite obtener y editar los registros almacenados (Hits).

### Modulos

* [Body Parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [express] - Fast, unopinionated, minimalist web framework for Node.js
* [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js
* [node-cron](https://www.npmjs.com/package/node-cron) - The node-cron module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab.
* [nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [request-promise](https://github.com/request/request-promise) - The simplified HTTP request client 'request' with Promise support

# Primeros Pasos!

  - Instalar Node.js (versión usada 10.15.0) (https://nodejs.org/es/).
  - Instalar y configurar servidor de MongoDB (Se recomienda Docker y Kitematic).
    ```sh
    localhost:27017
    ```
  - Clonar el repositorio e instalar las dependencias.
    ```sh
    $ npm install
    ```

### Ejecución

  - Para iniciar el Servidor (Sobre el puerto :3000)
    ```sh
    $ npm start
    ```
  - El flujo inicial del servidor creará la BD en caso de no existir y creará la colección llamada "Hits".
  - Dará inicio al Cron Job que será ejecutado cada 1 hora (ejm: 12:00 PM; 1:00 PM; 2:00 PM). En el cual obtendrá de la API de de Hacker News los Hits y serán almacenados unicamente los registros que no hayan sido registrados anteriormente.




[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

