# Backend Project - NestJS

Este proyecto utiliza [NestJS](https://nestjs.com) para crear una API eficiente y escalable con TypeScript.

## Configuración del Proyecto

### Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias:

crea un archivo en la raiz .env y coloca esto:
DATABASE_URL="file:./dev.db"

```bash
pnpm install
pnpm exec prisma generate
pnpm prisma migrate dev


Iniciar el Servidor

# Modo desarrollo
pnpm run start:dev
```
