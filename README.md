# iMachinary_assesstment

### Hecho por Mariano Ceballos para iMachinary

Para usar este repo:

-   Instalar dependencias
    ```
    npm i
    ```
-   Crear archivo .env y agregar las variables que estan en .env.default y rellenar con sus respectivos valores

    ```
    DB_PASSWORD=
    DB_NAME=
    DB_HOST=
    DB_USER=
    ```

-   Correr el servidor

    ```
    npm start
    ```

-   Acceder desde
    ```
    http://localhost:3000
    ```
-   Rutas
    ```
    /people
    /movies
    /roles
    ```

### Este diagrama muestra la resolución final a la que llegué para resolver el ejercicio:

> ![image](https://user-images.githubusercontent.com/98489048/198365568-0fb1c9cd-e21c-4df5-b74e-43525ad0e8ac.png)

## Explicación:

Además de mucha investigación, la razón por la que llegué a esta conclusión fue porque las tablas **Roles**, **People** y **Movies** no se pueden relacionar entre sí si no hay una tabla intermedia. La cuestión está en que por ejemplo para asociar una _foreing key_ de una **person** con alguna **movie** necesitaríamos tener duplicada esa **movie** tantas veces como personas trabajen en ella, lo cual es erroneo.
Así mismo también pasaría con los **roles** y las **personas**.
Por ende, para poder hacer un "vínculo" entre todas las tablas usé una intermediaria la cual maneja el flujo de información entre todas.

## Formato de las tablas y algunos datos en ellas:

Tabla Movies

![image](https://user-images.githubusercontent.com/98489048/198367344-60e1ed05-7885-4bb4-a96d-36f43cb7dc2c.png)

Tabla People

![image](https://user-images.githubusercontent.com/98489048/198367456-38cb6fb2-54f9-4543-8da2-6d7e16b846cf.png)

Tabla Roles

![image](https://user-images.githubusercontent.com/98489048/198367520-ba3c7290-376e-4e62-872a-67e9e364c10f.png)

Tabla PersonRoleMovies (relacionada)

![image](https://user-images.githubusercontent.com/98489048/198367732-e8f0cfa8-699e-4eaa-8f21-02f110c294e7.png)

## Algunas cuestiones que tuve que tener en cuenta:

Independientemente de la tabla que estemos consultando (**Roles**, **People** o **Movies**) tendremos que incluir SIEMPRE la tabla principal (**PersonRoleMovie**) ya que sin ella no podremos obtener los respectivos datos extras para esa tabla. - Solución: incluí querys en las rutas de person y movie además de lógica para filtrar.

> Por ejemplo: en el caso de la tabla **Movies** podremos filtrar por roles, personas de todas o una pelicula en específico. Basándonos los datos de las tablas mostradas anteriormente una consulta de este tipo
> _"/movie?role=actor&person=lola&title=lotr"_ traería la siguiente información:
> ![image](https://user-images.githubusercontent.com/98489048/198372903-52cda836-d076-4219-91de-89663e327c64.png)
>
> ya que Lola Miers es la actriz de la película LOTR.

> En el caso de la tabla **People** podremos filtrar por roles, peliculas de todas o una persona en específico. Basándonos los datos de las tablas mostradas anteriormente una consulta de este tipo
> _"/people?role=dir"_ traería la siguiente información:

![image](https://user-images.githubusercontent.com/98489048/198377741-a616e6bd-7cad-4e2b-8287-01f86a0b7980.png)

## Extras:

Si ingresamos en la ruta "/", se dispara una función que llena o no (dependiendo de si ya tiene datos) la DB. Esto lo hice para facilitarme el proceso de llenado de datos en la DB ya que no hice una ruta POST (debería haberlo hecho) y quedó por si a alguien le facilita la vida. 👌

Esta función no crea relaciones así que eso hay que hacerlo manual una vez que los datos estén en nuestra DB.

![image](https://user-images.githubusercontent.com/98489048/198374221-65450f9b-cbc7-4890-99e7-1654c94b115e.png)

### Arbol de carpetas:

-   server.js -> creación del servidor y donde iniciamos el sync de sequelize

-   src -> carpeta principal

-   db.js -> lógica de sequelize para capturar los modelos basandose en los archivos creados en la carpeta models. Además acá se encuentran las relaciones entre tablas.
-   models -> carpeta de modelos de db
-   controllers -> carpeta con funcionalidades y lógica de conexion con la DB y el transpaso de información a las rutas para ser devueltas al usuario.
-   routes -> carpeta con rutas separadas por archivos
    ![image](https://user-images.githubusercontent.com/98489048/198378863-ddb165d6-41ec-4daa-a863-619dcfdd6df0.png)

_Ansío poder aprender y conocer si hay formas más eficientes de resolverlo._

Gracias por tu tiempo!
