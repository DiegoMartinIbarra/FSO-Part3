# Nexus Contacts | Professional Contact Management System

Nexus Contacts es una solución Full Stack diseñada para centralizar y gestionar agendas de contactos con una experiencia de usuario moderna y fluida. Este proyecto se centras en el **stack MERN** (MongoDB, Express, React, Node.js).

🚀 **[Ver Aplicación en Vivo](https://part-3-morning-glade-4138.fly.dev/)**

---

## 💎 Características Principales
* **Interfaz de Alta Fidelidad**: Diseñada con **Tailwind CSS**, implementando una jerarquía visual clara, tipografía optimizada (Inter) y estados de interactividad.
* **Gestión Inteligente de Datos**: Sincronización con el backend para detectar contactos existentes y permitir la deteccion de números mediante validaciones de usuario.
* **Filtrado en Tiempo Real**: Algoritmo de búsqueda optimizado para localizar contactos instantáneamente según el nombre.
* **Arquitectura de Componentes**: Estructura modular y escalable basada en componentes desacoplados (`Filter`, `PersonForm`, `Numbers`, `Names`).
* **Sistema de Notificaciones**: Feedback visual dinámico para confirmaciones de CRUD y manejo de errores del servidor.

## 🛠️ Stack Tecnológico

### Frontend
* **React (Vite)**: Manejo de estado complejo y hooks de ciclo de vida (`useState`, `useEffect`).
* **Tailwind CSS**: Estilizado atómico y diseño responsivo.
* **Axios**: Gestión de peticiones HTTP asíncronas hacia la API.

### Backend & DevOps
* **Node.js & Express**: Servidor robusto configurado para servir archivos estáticos y rutas de API REST.
* **MongoDB Atlas**: Persistencia de datos NoSQL.
* **Fly.io**: Despliegue en la nube con configuración de Proxy dinámico para desarrollo local.
* **Estrategia de Git**: Flujo de trabajo basado en ramas para separar el desarrollo educativo de la versión de portfolio (`master` vs `feature-portfolio-ui`).

## 🚀 Instalación y Ejecución

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/nexus-contacts.git](https://github.com/tu-usuario/nexus-contacts.git)
    ```
2.  Instala las dependencias (Frontend & Backend):
    ```bash
    npm install
    ```
3.  Configura tus variables de entorno en el backend (MongoDB URI).
4.  Inicia el entorno de desarrollo:
    ```bash
    npm run dev
    ```

---
Desarrollado como parte del currículo **FullStack Open 2026** para demostrar habilidades en el desarrollo de aplicaciones web de extremo a extremo.
