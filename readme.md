# Sistema de Gestión de Usuarios

Este es el primer trabajo práctico de Backend para la diplomatura Full Stack de la UTN BA.

## Descripción

Este sistema es una aplicación de línea de comandos desarrollada en Node.js que permite gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Los datos de los usuarios se almacenan en un archivo JSON, y los errores se registran en un archivo de log.

## Funcionalidades

-  **Listar todos los usuarios**: Muestra una lista de todos los usuarios registrados en el sistema.

-  **Obtener un usuario por ID**: Muestra la información de un usuario específico mediante su ID.

-  **Agregar un nuevo usuario**: Permite agregar un nuevo usuario al sistema proporcionando sus datos.

-  **Actualizar un usuario existente**: Actualiza la información de un usuario existente mediante su ID.

-  **Eliminar un usuario**: Elimina un usuario del sistema mediante su ID.

-  **Mostrar instrucciones de uso**: Proporciona información sobre cómo utilizar la aplicación y los comandos disponibles.

## Almacenamiento de Datos

-  **Usuarios**: Los datos de los usuarios se guardan en el archivo `data/users.json`.

-  **Errores**: Los errores generados durante la ejecución se registran en el archivo `error/log.json`.

## Instrucciones de Uso

Para utilizar la aplicación, debes ejecutar comandos en la línea de comandos con el siguiente formato:

```bash
node  index.js  <comando> [argumentos]
```

### Comandos Disponibles

1. **getUsers**

-  **Descripción**: Muestra la lista de todos los usuarios.

-  **Uso**:

```bash
node  index.js  getUsers
```

2. **getUserById `<id>`**

-  **Descripción**: Muestra el usuario con el ID especificado.

-  **Uso**:

```bash
node  index.js  getUsers
```

3. **addUser `<nombre>` `<apellido>` `<email>` `<password>`**

-  **Descripción**: Agrega un nuevo usuario.
-  **Uso**:

```bash
node index.js addUser <nombre> <apellido> <email> <password>
```

4. **updateUser `<id>` `<nombre>` `<apellido>` `<email>` `<password>`**

-  **Descripción**: Actualiza la información de un usuario existente.
-  **Uso**:

```bash
node index.js updateUser <id> <nombre> <apellido> <email> <password>
```

5. **deleteUser `<id>`**

-  **Descripción**: Elimina el usuario con el ID especificado.
-  **Uso**

```bash
node index.js deleteUser <id>
```

6. **Instrucciones**

-  **Descripción**: Muestra las instrucciones de uso y los comandos disponibles.
-  **Uso**

```bash
npm run instrucciones
```

## Manejo de Errores

El sistema captura y registra cualquier error que ocurra durante la ejecución de las operaciones. Los errores se almacenan en `error/log.json` con detalles como:

-  **ID del error**
-  **Tipo de error**
-  **Mensaje de error**
-  **Fecha y hora**

Esto facilita la depuración y el seguimiento de problemas en la aplicación.

## Notas

-  Asegúrate de tener **Node.js** instalado en tu sistema para ejecutar la aplicación.
-  Los **IDs de usuario** son generados automáticamente utilizando UUID al crear un nuevo usuario.
-  Este proyecto es parte de la **diplomatura Full Stack de la UTN BA** y representa el primer trabajo práctico de Backend.

## Estructura del Proyecto

```bash
├── index.js
├── models.js
├── utils
│   ├── handleError.js
│   ├── createUser.js
│   ├── instrucciones.js
├── data
│   └── users.json
├── error
│   └── log.json
├── package.json
└── README.md
```

## Contacto

Para cualquier consulta o sugerencia, podés contactarme en:

-  **Email**: picottonico@gmail.com
-  **GitHub**: [NicoPicotto](https://github.com/NicoPicotto)
