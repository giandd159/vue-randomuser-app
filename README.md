# Vue Random User App

Esta es una aplicación desarrollada con Vue.js que utiliza la API randomuser.me para obtener una lista de usuarios y mostrarlos en una tabla. La aplicación incluye funcionalidades de búsqueda y filtrado por nombre y nacionalidad, y utiliza Vuex para la gestión del estado global.

## Características

1. **Obtención de Usuarios**: 
   - Usar la API [randomuser.me](https://randomuser.me/) para obtener usuarios.
   - Mostrar información relevante de cada usuario en una tabla: nombre, apellido, género, email, nacionalidad y foto.

2. **Búsqueda en Tiempo Real**: 
   - Campo de búsqueda que permite filtrar los usuarios por nombre y apellido en tiempo real.

3. **Filtro por Nacionalidad**: 
   - Selector que permite al usuario filtrar los usuarios por nacionalidad.
   - Permitir seleccionar múltiples nacionalidades.

4. **Gestión del Estado con Vuex**: 
   - Manejar el estado global de la aplicación.
   - Almacenar la lista de usuarios en el store de Vuex.
   - Gestionar los filtros de búsqueda y nacionalidad utilizando Vuex.

## Requisitos

- Node.js (>=12.x)
- Vue CLI

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/tu-usuario/vue-randomuser-app.git
    cd vue-randomuser-app
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Inicia la aplicación:
    ```sh
    npm run serve
    ```

## Estructura del Proyecto

```plaintext
src/
├── assets/                # Archivos estáticos como imágenes
├── components/            # Componentes Vue.js
│   ├── UserTable.vue      # Tabla de usuarios
│   ├── SearchBar.vue      # Barra de búsqueda
│   ├── NationalityFilter.vue # Filtro de nacionalidades
│   └── UserPagination.vue # Paginación de usuarios
├── store/                 # Estado global con Vuex
│   └── index.js
├── App.vue                # Componente principal de la aplicación
└── main.js                # Punto de entrada de la aplicación
