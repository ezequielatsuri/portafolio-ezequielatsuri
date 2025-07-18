# 🏗️ Arquitectura del Proyecto

## 📋 Estructura de Carpetas

```
src/app/
├── components/          # Componentes reutilizables
│   ├── home/           # Componente de la página de inicio
│   ├── about/          # Componente de la página sobre mí
│   ├── skills/         # Componente de la página de habilidades
│   ├── projects/       # Componente de la página de proyectos
│   ├── contact/        # Componente de la página de contacto
│   ├── navbar/         # Componente de navegación
│   ├── footer/         # Componente de pie de página
│   └── index.ts        # Exportaciones centralizadas
├── pages/              # Páginas de la aplicación
│   ├── home/           # Página de inicio
│   ├── about/          # Página sobre mí
│   ├── skills/         # Página de habilidades
│   ├── projects/       # Página de proyectos
│   ├── contact/        # Página de contacto
│   └── index.ts        # Exportaciones centralizadas
├── app.routes.ts       # Configuración de rutas
├── app.html           # Template principal
└── app.ts             # Componente raíz
```

## 🎯 Separación de Responsabilidades

### 📄 Páginas (Pages)
Las páginas son contenedores que:
- **Importan y utilizan componentes**
- **Manejan la lógica específica de la página** (analytics, meta tags, etc.)
- **Definen el contexto de la ruta**
- **Pueden agregar funcionalidades adicionales** (filtros, búsqueda, etc.)

### 🧩 Componentes (Components)
Los componentes son:
- **Reutilizables** en diferentes páginas
- **Responsables de la presentación** de datos específicos
- **Independientes** de la lógica de navegación
- **Fáciles de testear** de forma aislada

## 🔄 Flujo de Datos

```
Route → Page → Component → Template
```

1. **Route**: Define la URL y carga la página
2. **Page**: Maneja la lógica de la página y renderiza componentes
3. **Component**: Maneja la presentación de datos específicos
4. **Template**: Define la estructura HTML

## 📝 Ejemplo de Implementación

### Página (Page)
```typescript
// pages/home/home.page.ts
@Component({
  selector: 'app-home-page',
  template: `<app-home></app-home>`
})
export class HomePage implements OnInit {
  ngOnInit() {
    this.setPageTitle();
    this.trackPageView();
  }
  
  private setPageTitle() {
    document.title = 'Ezequiel - Inicio';
  }
}
```

### Componente (Component)
```typescript
// components/home/home.component.ts
@Component({
  selector: 'app-home',
  template: `<!-- Contenido de la página de inicio -->`
})
export class HomeComponent {
  // Lógica específica del componente
}
```

### Ruta (Route)
```typescript
// app.routes.ts
{
  path: 'home',
  loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
}
```

## 🚀 Ventajas de esta Arquitectura

### ✅ **Separación Clara**
- Páginas manejan la lógica de navegación
- Componentes manejan la presentación
- Fácil mantenimiento y testing

### ✅ **Reutilización**
- Componentes pueden usarse en múltiples páginas
- Lógica de página específica separada de la presentación

### ✅ **Escalabilidad**
- Fácil agregar nuevas páginas
- Componentes modulares y extensibles
- Estructura clara para equipos grandes

### ✅ **Performance**
- Lazy loading de páginas
- Componentes optimizados
- Carga diferida de recursos

## 🔧 Configuración de Rutas

Las rutas apuntan a las páginas, no directamente a los componentes:

```typescript
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage)
  }
  // ... más rutas
];
```

## 📦 Exportaciones Centralizadas

### Archivo de Índice de Componentes
```typescript
// components/index.ts
export { HomeComponent } from './home/home.component';
export { AboutComponent } from './about/about.component';
// ... más exportaciones
```

### Archivo de Índice de Páginas
```typescript
// pages/index.ts
export { HomePage } from './home/home.page';
export { AboutPage } from './about/about.page';
// ... más exportaciones
```

## 🎨 Patrones de Diseño Utilizados

### **Container/Presentational Pattern**
- **Páginas**: Actúan como contenedores
- **Componentes**: Actúan como presentacionales

### **Lazy Loading**
- Carga diferida de páginas
- Mejora el performance inicial

### **Single Responsibility Principle**
- Cada archivo tiene una responsabilidad específica
- Fácil testing y mantenimiento

## 🔮 Extensiones Futuras

Esta arquitectura permite fácilmente:

- **Agregar nuevas páginas** sin afectar componentes existentes
- **Implementar guards** para protección de rutas
- **Agregar interceptors** para manejo de requests
- **Implementar state management** (NgRx, etc.)
- **Agregar testing** unitario y e2e
- **Implementar PWA** features

## 📚 Mejores Prácticas

1. **Nomenclatura**: Usar `.page.ts` para páginas y `.component.ts` para componentes
2. **Imports**: Usar archivos de índice para importaciones limpias
3. **Lazy Loading**: Siempre usar lazy loading para páginas
4. **Testing**: Escribir tests para componentes y páginas por separado
5. **Documentación**: Mantener documentación actualizada 