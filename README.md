MarioDex 🎮

Aplicación full stack inspirada en los personajes de Super Mario Bross, desarrollada con Angular en el frontend y Laravel + MongoDB en el backend. El proyecto permite listar, crear y gestionar personajes tipo Super Mario mediante una API REST y una interfaz moderna.

🚀 Tecnologías utilizadas
Frontend
Angular
TypeScript
Bootstrap
Cypress
Jasmine / Karma
Backend
Laravel
PHP
MongoDB
API REST
DevOps / Herramientas
Git & GitHub
Composer
npm
Docker (opcional)
📂 Estructura del proyecto
mariodex/
│
├── backend/        # API Laravel
│
├── frontend/       # Aplicación Angular
│
└── README.md
⚙️ Instalación
1️⃣ Clonar el repositorio
git clone https://github.com/jesusmendez87/mariodex.git
cd mariodex
🔥 Configuración Backend (Laravel)

Entrar al backend:

cd backend

Instalar dependencias:

composer install

Crear archivo .env:

cp .env.example .env

Generar clave:

php artisan key:generate

Configurar MongoDB en .env:

DB_CONNECTION=mongodb
MONGO_URI=mongodb://localhost:27017
DB_DATABASE=mariodex

Ejecutar servidor:

php artisan serve

Servidor disponible en:

http://127.0.0.1:8000
🌐 Configuración Frontend (Angular)

Entrar al frontend:

cd frontend

Instalar dependencias:

npm install

Ejecutar aplicación:

ng serve

Frontend disponible en:

http://localhost:4200
📡 API REST
Obtener personajes
GET /api/personajes
Crear personaje
POST /api/personajes

Ejemplo JSON:

{
  "nombre": "Mario",
  "tipo": "fuego",
  "urlImagen": "https://example.com/mario.png"
}
🧪 Testing
Frontend Angular
Unit tests
ng test
End-to-end tests
npx cypress open
Backend Laravel

Ejecutar tests:

php artisan test
✨ Funcionalidades
📋 Listado de personajes
➕ Creación de personajes
🖼️ Gestión de imágenes
🔍 Consumo de API REST
🧪 Tests unitarios y E2E
💾 Persistencia en MongoDB
📸 Capturas

Puedes añadir aquí screenshots del proyecto:

![Home](./screenshots/home.png)
🛠️ Variables de entorno
Backend .env
APP_NAME=MarioDex
APP_ENV=local

DB_CONNECTION=mongodb
MONGO_URI=mongodb://localhost:27017
DB_DATABASE=mariodex
📦 Scripts útiles
Angular
ng serve
ng build
ng test
Laravel
php artisan serve
php artisan test
php artisan migrate
🤝 Contribuciones

Las contribuciones son bienvenidas.

Haz fork del proyecto
Crea una rama:
git checkout -b feature/nueva-funcionalidad
Haz commit:
git commit -m "Nueva funcionalidad"
Haz push:
git push origin feature/nueva-funcionalidad
Abre un Pull Request
📄 Licencia

Este proyecto está bajo licencia MIT.

👨‍💻 Autor

Desarrollado por jesusmendez87

Repositorio oficial:
MarioDex Repository