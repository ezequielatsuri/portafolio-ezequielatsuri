import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">Sobre <span class="text-blue-600">Mí</span></h1>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">¿Quién soy?</h2>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                Soy un desarrollador apasionado por crear soluciones digitales innovadoras que transforman ideas en realidades. 
                Me especializo en desarrollo web full-stack con un enfoque en experiencias de usuario excepcionales.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Mi objetivo es crear aplicaciones que no solo funcionen perfectamente, 
                sino que también inspiren y faciliten la vida de las personas.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div class="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div class="text-gray-600">Años de Experiencia</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                <div class="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div class="text-gray-600">Proyectos Exitosos</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">Mis Especialidades</h3>
            <div class="space-y-6">
              <div class="flex items-center p-4 bg-blue-50 rounded-xl">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">⚛️</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Desarrollo Frontend</h4>
                  <p class="text-gray-600">Angular, React, Vue.js</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-blue-50 rounded-xl">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🔧</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Desarrollo Backend</h4>
                  <p class="text-gray-600">Node.js, Express, Python</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-blue-50 rounded-xl">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🗄️</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Bases de Datos</h4>
                  <p class="text-gray-600">MongoDB, PostgreSQL, MySQL</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-blue-50 rounded-xl">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🎨</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Diseño UX/UI</h4>
                  <p class="text-gray-600">Responsive, Accesible, Moderno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {} 