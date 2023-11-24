<h1>General Routes</h1>

| Route             | Description                          | Protected |
|-------------------|--------------------------------------|-----------|
| `/`               | Home page                            |           |
| `/recomendados`   | (Destinos recomendados)              |           |
| `/registrarse`    | Pagina de registro                   |           |
| `/iniciar-sesion` | Pagina de inicio de sesión           |           |
| `/viajes`         | Vista de todos viajes de usuario     | ✅        |
| `/lista-deseos`   | Destinos apuntados                   | ✅        |
| `/perfil`         | Perfil de usuario                    | ✅        |
| `/perfil/editar`  | Editar perfil de usuario             | ✅        |
| `*` | Error 404          |           |


<h1>Trip Routes</h1>

| Route                     | Description                                          | Protected |
|---------------------------|------------------------------------------------------|-----------|
| `/viajes`                 | Vista de todos mis viajes                            | ✅         |
| `/viajes/crear`           | Muestra el formulario para crear uno                 | ✅         |
| `/viajes/realizados`      | Muestra los viajes ya hechos                         | ✅         |
| `/viajes/detalles/:id`    | Detalles del viaje                                   | ✅         |
| `/viajes/reservas/:id`    | Vista de las reservas de hotel, vuelos, planes, etc. | ✅         |
| `/viajes/planes/:id`      | Vista para visualizar (y reservar) los planes        | ✅         |
| `/viajes/informacion/:id` | Visualización de la información del pais             | ✅         |
| `/viajes/gastos/:id`      | Gastos de viaje de usuarios  (añadir/consultar)      | ✅         |

<h1>Profile Routes</h1>

| Route                   | Description                                                  | Protected |
|-------------------------|--------------------------------------------------------------|-----------|
| `/perfil/documentos`    | Vista donde el usuario podrá almacenar sus documentos        | ✅         |
| `/perfil/amigos`        | Muestra un listado de amigos                                 | ✅         |
| `/perfil/amigos/añadir` | (Muestra un buscador donde buscas por nombre otros usuarios) | ✅         |
