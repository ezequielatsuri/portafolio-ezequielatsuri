# 🚀 Portafolio Personal - Ezequiel

Un portafolio profesional y moderno construido con Angular y Tailwind CSS que muestra mis habilidades, proyectos y experiencia como desarrollador Full Stack.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Navegación Intuitiva**: Menú de navegación con modo móvil
- **Secciones Completas**: 
  - Página de inicio con presentación personal
  - Sobre mí con experiencia y especialidades
  - Habilidades técnicas con barras de progreso
  - Portafolio de proyectos
  - Formulario de contacto
- **Performance Optimizada**: Carga rápida y SEO friendly
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 17, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: CSS Animations
- **Responsive Design**: Mobile-first approach
- **Build Tool**: Angular CLI

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── home/           # Componente de inicio
│   │   ├── about/          # Componente sobre mí
│   │   ├── skills/         # Componente de habilidades
│   │   ├── projects/       # Componente de proyectos
│   │   ├── contact/        # Componente de contacto
│   │   ├── navbar/         # Componente de navegación
│   │   ├── footer/         # Componente de pie de página
│   │   └── index.ts        # Exportaciones de componentes
│   ├── pages/              # Páginas de la aplicación
│   │   ├── home/           # Página de inicio
│   │   ├── about/          # Página sobre mí
│   │   ├── skills/         # Página de habilidades
│   │   ├── projects/       # Página de proyectos
│   │   ├── contact/        # Página de contacto
│   │   └── index.ts        # Exportaciones de páginas
│   ├── app.routes.ts       # Configuración de rutas
│   ├── app.html           # Template principal
│   └── app.ts             # Componente raíz
├── styles.scss            # Estilos globales
└── main.ts               # Punto de entrada
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd my-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

### Comandos disponibles

- `npm start` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run test` - Ejecutar tests
- `npm run lint` - Verificar código con ESLint

## 🎨 Personalización

### Colores y Tema
Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Contenido
- **Información personal**: Editar en `components/home/home.component.ts`
- **Proyectos**: Modificar en `components/projects/projects.component.ts`
- **Habilidades**: Actualizar en `components/skills/skills.component.ts`
- **Información de contacto**: Cambiar en `components/contact/contact.component.ts`

## 📱 Secciones del Portafolio

### 🏠 Página de Inicio
- Presentación personal con animaciones
- Estadísticas de experiencia
- Sección de servicios ofrecidos
- Call-to-action para proyectos

### 👨‍💻 Sobre Mí
- Descripción personal y profesional
- Experiencia y especialidades
- Estadísticas de proyectos completados

### 🛠️ Habilidades
- Categorías: Frontend, Backend, Base de Datos & Herramientas
- Barras de progreso visuales
- Porcentajes de dominio por tecnología

### 📂 Proyectos
- Grid de proyectos con imágenes
- Descripción detallada de cada proyecto
- Tecnologías utilizadas
- Enlaces a demo y código

### 📞 Contacto
- Información de contacto personal
- Enlaces a redes sociales
- Formulario de contacto funcional
- Ubicación y disponibilidad

## 🌟 Características Destacadas

- **Animaciones CSS**: Efectos suaves y profesionales
- **Gradientes Modernos**: Diseño visual atractivo
- **Iconografía**: Emojis y elementos visuales
- **Hover Effects**: Interacciones dinámicas
- **Mobile Menu**: Navegación optimizada para móviles
- **SEO Optimized**: Meta tags y estructura semántica

## 📈 Optimizaciones

- **Lazy Loading**: Carga diferida de páginas
- **Image Optimization**: Optimización de imágenes
- **Code Splitting**: División de código para mejor performance
- **Minification**: Código minificado para producción

## 🔧 Configuración de Producción

1. **Construir para producción**
   ```bash
   npm run build
   ```

2. **Servir archivos estáticos**
   ```bash
   npm install -g serve
   serve -s dist/my-portfolio
   ```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

## 📞 Contacto

- **Email**: ezequiel@ejemplo.com
- **LinkedIn**: [Tu perfil de LinkedIn]
- **GitHub**: [Tu perfil de GitHub]
- **Portfolio**: [URL de tu portafolio]

---

**Desarrollado con ❤️ por Ezequiel**
