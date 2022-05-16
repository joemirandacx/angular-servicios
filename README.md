# Servicios en Angular

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.2.

## Development server

Ejecute `ng serve` para arrancar un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos fuente.

## Build

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Creación del Proyecto

```
$ ng new angular-servicios --routing=true --style=scss
```

## ProductService: Creación de nuestro primer servicio

```
$ ng g s services/products
```

```
$ ng g c components/product-list
```

## UsersService: Servicio que consume datos de una API
```
$ ng g s services/users
```
```
$ ng g c components/user-list
```

## TodosService: Servicio CRUD a una API
```
$ ng g s services/todos
```

```
$ ng g c components/todo-list
```

## Creación del menú de navegación
```
$ ng g c components/navigation
```
