## INICIAR

npm init -y
npm i express

agregar en package.json "type":"module"

npm i nodemon -D
agregar en pakckege en script "dev":"nodemon index.js"

crear DB en mysql;
crear carpeta DB para tener archivo de referencia

## conectamos a mysql

instalamos mysql2 para conectar a la DB;
npm i mysql2

creo archivo db.js para la conexion, importar la funcion especial createPool (conjunto de operaciones) y createConection(trabaja con un hilo)
Usamos objeto createPool.
pool tiene un parametro que se llama query.

## estructura del proyecto

Creamos carpeta routes y creamos rutas.

Creamos carpeta controlorer para las funciones de la rutas

## app.use(express.json())

Sirve para convertir a json antes de pasar la informacion a la rutas

### Patch

Esta query sirve para modificar parcialmente. ah diferencia de put que tiene que modificar todo.
Tambein hay que colocar en el pool IFNOT(?,NAME), donde si no existe coloca el valor anterior.

## error handle

usar try catck

### not found

usar middleware en app.use, lo colocamos de ultimo.

### variable de entorno.

son variables que el servidor y computador pueden guardar variables.

1.instalar npm i dotenv
2.crear archivo .env dentro de este guardamos las variables PORT = 3000.

### usamos variables

1.crear archivo config.js dentro de src.
2.importamos {config} from dotenv.
3.config() y expor const PORT = process.env.PORT || 3000 .
4.en index.js o en donde queramos usar iumportamos import { PORT } from "./config.js" y usamos.

### crear archivo app

app va a contoner todos los use que estaban en index, solo en index dejamos el listen.

### deploy

creamos archigo .gitigonre

inicializamos repo con git init.
git add .
git commit -m "sd"

creamos repo en git hub
git remote .....
git push master

agregar start script en package.json
hacemos otros commit y push
