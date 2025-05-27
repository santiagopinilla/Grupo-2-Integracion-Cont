# Proyecto Integración Continua

Este es un ejemplo básico de un proyecto de integración continua utilizando Docker para contenerizar tanto el backend como el frontend.

## Estructura del proyecto:

- **backend/**: Contiene el servicio backend basado en Node.js y Express.
- **frontend/**: Contiene el servicio frontend basado en Nginx.
- **docker-compose.yml**: Orquestador de contenedores para gestionar tanto el backend como el frontend.

## Cómo ejecutar:

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `docker-compose up --build` para levantar los contenedores.
4. El backend estará disponible en `http://localhost:3000/api` y el frontend en `http://localhost:8081`.

## Autores:
Santiago Pinilla
