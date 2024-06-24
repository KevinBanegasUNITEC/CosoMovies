# Favorites

## Obtener todos los favoritos de un usuario en especifico:

    GET /api/favorites


### Parametros del body:
- body.**`user`**: El usuario del que se quiere obtener sus favoritos
____________________________________________

## Agregar una pelicula a favoritos de un usuario:
    
    POST /api/favorites

### Parametros del body:
- body.**`user`**: El usuario que agrega la pelicula a favoritos
- body.**`id`**: El id de la pelicula que se va a agregar a favoritos
____________________________________________
## Eliminar una pelicula de favoritos de un usuario:
    DELETE /api/favorites


### Parametros del body
- body.**`user`**: El usuario que eliminara la pelicula a favoritos
- body.**`id`**: El id de la pelicula que se eliminara de favoritos del usuario

____________________________________________
____________________________________________
____________________________________________


# Utils

`Todos en esta lista son funciones de tipo GET`

## Traer una lista de peliculas de acuerdo al nombre:
    /api/utils/search/movie/<Nombre Pelicula>

________________________________________________________________

## Traer la toda la informacion necesaria de una pelicula en especifico:
    /api/utils/search/id/<ID de la pelicula>

### Parametros de body;
- body.**`user`**: El usuario que esta viendo le informacion de la pelicula para verificar si la tiene en favoritos
_______________________________________________________________

## Traer generos disponibles:
    /api/utils/genres
_________________________________________________________

## Trear lista de peliculas de un genero:
    /api/utils/genre/<ID del genero>
____________________________________________________

## Lista upcoming:
    /api/utils/upcoming
___________________________________________________

## Lista TopRated:
    /api/utils/toprated
__________________________________________________

## Lista Popular:
    GET /api/utils/popular
__________________________________________________

### Lista NowPlaying:
    /api/utils/nowplaying

# Login

## Sign Up (Registrar usuarios)
   `Funcion tipo post`
     /api/login/signup
### Parametros de body;

   - body.**`email`**: El usuario que debe llevar el siguiente formato xxxxx@xxxxx.com
   - body.**`password`**: La contraseña debe tener mas de 5 caracteres

## SignIn (Iniciar Sesion)
`Funcion tipo post`
### Parametros de body;
    - body.**`email`**: El usuario que debe llevar el siguiente formato xxxxx@xxxxx.com
   - body.**`password`**: La contraseña debe tener mas de 5 caracteres

## LogOut (Cerrar sesion)
`Funcion tipo post`
