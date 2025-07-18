import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <!-- Hero Section -->
      <section class="relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6 py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Content -->
            <div class="space-y-8">
              <div class="space-y-4">
                <h1 class="text-6xl font-bold text-gray-800 leading-tight">
                  Hola, soy <span class="text-blue-600">Ezequiel Atsuri</span>
                </h1>
                <h2 class="text-3xl text-gray-600 font-medium">
                  Desarrollador Full Stack
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                  Transformo ideas en experiencias digitales excepcionales. 
                  Especializado en crear soluciones web innovadoras que conectan 
                  tecnología con creatividad.
                </p>
              </div>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  routerLink="/projects" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Ver Proyectos
                </a>
                <a 
                  routerLink="/contact" 
                  class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contactar
                </a>
              </div>
              
              <!-- Stats -->
              <div class="grid grid-cols-3 gap-6 pt-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">3+</div>
                  <div class="text-gray-600 text-sm">Años de Experiencia</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">20+</div>
                  <div class="text-gray-600 text-sm">Proyectos Completados</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">15+</div>
                  <div class="text-gray-600 text-sm">Tecnologías Dominadas</div>
                </div>
              </div>
            </div>
            
            <!-- Hero Image/Illustration -->
            <div class="relative">
              <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div class="text-center space-y-6">
                  <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto flex items-center justify-center">
                    <span class="text-white text-4xl font-bold">EA</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">Ezequiel Atsuri</h3>
                    <p class="text-gray-600">Desarrollador Full Stack</p>
                  </div>
                  <div class="flex justify-center space-x-4">
                    <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-blue-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Skills Section -->
      <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Tecnologías <span class="text-blue-600">Destacadas</span></h2>
            <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div class="text-4xl mb-4">⚛️</div>
              <h3 class="font-semibold text-gray-800 mb-2">Frontend</h3>
              <p class="text-gray-600 text-sm">Angular, React, Vue.js</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div class="text-4xl mb-4">🔧</div>
              <h3 class="font-semibold text-gray-800 mb-2">Backend</h3>
              <p class="text-gray-600 text-sm">Node.js, Express, Python</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div class="text-4xl mb-4">🗄️</div>
              <h3 class="font-semibold text-gray-800 mb-2">Bases de Datos</h3>
              <p class="text-gray-600 text-sm">MongoDB, PostgreSQL</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div class="text-4xl mb-4">🎨</div>
              <h3 class="font-semibold text-gray-800 mb-2">Diseño</h3>
              <p class="text-gray-600 text-sm">UX/UI, Responsive</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            ¿Listo para crear algo increíble juntos?
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Tengo la pasión y las habilidades para convertir tu visión en una realidad digital. 
            Trabajemos juntos para crear algo extraordinario.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              routerLink="/projects" 
              class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Mi Trabajo
            </a>
            <a 
              routerLink="/contact" 
              class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Iniciar Conversación
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent {} 