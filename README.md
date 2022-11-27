# Modulo3---Repartido9
En esta app conectaremos con una Base de Datos de MongoDB de diferentes maneras, mediante Mongo Shell, la cual la demostración se encuentra dentro de la carpeta 'Shell', allí veremos el paso a paso y la implementación de todos los comandos.
Luego mediante mongo drivers que se encuentra todo el código en 'app.js', aquí podemos ver todas las funciones, las cuales están comentadas para ir referenciándose mejor.
Por último tenemos el manejo de la BDD mediante mongoose, la cual se encuentra en 'appMongooseServer.js', de igual manera podemos ver todas las funciones comentadas.

Para ejecutar tanto app.js como appMongooseServer.js, debemos tener por ejemplo el MongoDBCompass para ir viendo los cambios que vamos realizando, luego en nuestro editor de texto favorito, en la carpeta del proyecto debemos instalar las dependencias necesarias, las cuales se encuentran en 'package.json'.
Luego el código son funciones progresivas, es decir, una detrás de otra y debemos ejecutarlas en ese orden. En 'app.js' y 'appMongooseServer.js' el llamado de las funciones está comentado, debemos ir descomentándolas una a una para ir viendo los cambios y lo que realizan paso a paso.

Como son dos archivos diferentes archivos, cuando vayamos a ejecutar app.js, debemos modificar el package.json, la parte 'start' colocarle el nombre de app.js luego de nodemon, y cuando querrámos trabajar en appMongooseServer.js, debemos cambiar 'start' y colocarle el nombre de este archivo.
