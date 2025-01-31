# E-commerce Project

![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)

Este es un proyecto de e-commerce desarrollado con un **frontend** en **Next.js**, **Tailwind CSS** y **TypeScript**, y un **backend** en **Node.js**, **Express**, **Nodemon**, **Morgan**, **CORS** y una base de datos en **PostgreSQL**.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local.

### Frontend (Next.js)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/frontend
Instala las dependencias:

bash
Copy
npm install
Inicia el servidor de desarrollo:

bash
Copy
npm run dev
Backend (Node.js + Express)
Navega a la carpeta del backend:

bash
Copy
cd ../backend
Instala las dependencias:

bash
Copy
npm install
Configura la base de datos PostgreSQL:

Crea una base de datos en PostgreSQL.

Configura las variables de entorno en un archivo .env (ver .env.example).

Inicia el servidor de desarrollo:

bash
Copy
npm run dev
Variables de Entorno
Crea un archivo .env en la carpeta del backend con las siguientes variables:

env
Copy
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
Uso
Frontend
Accede al frontend en tu navegador:

bash
Copy
http://localhost:3000
Backend
El backend estará disponible en:

bash
Copy
http://localhost:3001
Puedes probar los endpoints usando herramientas como Postman o Insomnia.

Estructura del Proyecto
Copy
tu-repositorio/
├── frontend/               # Frontend en Next.js, Tailwind CSS y TypeScript
│   ├── public/             # Archivos estáticos
│   ├── src/                # Código fuente del frontend
│   └── ...                 # Configuraciones de Next.js
├── backend/                # Backend en Node.js, Express y PostgreSQL
│   ├── src/                # Código fuente del backend
│   ├── config/             # Configuraciones de la base de datos
│   ├── routes/             # Rutas de la API
│   └── ...                 # Otras carpetas y archivos
└── README.md               # Este archivo
Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:

Haz un fork del proyecto.

Crea una rama para tu feature (git checkout -b feature/NuevaCaracteristica).

Haz commit de tus cambios (git commit -m 'Añade alguna característica').

Haz push a la rama (git push origin feature/NuevaCaracteristica).

Abre un Pull Request.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Facundo Sura

Email: facundomesura@gmail.com

GitHub: facundo sura

Linkedin: @facundosura <!-- Opcional -->