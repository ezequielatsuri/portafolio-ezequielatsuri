import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
      <!-- Hero Section -->
      <section class="relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-6 py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Content -->
            <div class="space-y-8">
              <div class="space-y-4">
                <h1 class="text-6xl font-bold text-white leading-tight">
                  Hola, soy <span class="text-cyan-300">Ezequiel Atsuri</span>
                </h1>
                <h2 class="text-3xl text-blue-100 font-medium">
                  Desarrollador Full Stack
                </h2>
                <p class="text-xl text-blue-50 leading-relaxed">
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
                  <div class="text-3xl font-bold text-cyan-300">3+</div>
                  <div class="text-blue-100 text-sm">Años de Experiencia</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-300">20+</div>
                  <div class="text-blue-100 text-sm">Proyectos Completados</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-cyan-300">15+</div>
                  <div class="text-blue-100 text-sm">Tecnologías Dominadas</div>
                </div>
              </div>
            </div>
            
            <!-- Hero Image/Illustration -->
            <div class="relative">
              <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <div class="text-center space-y-6">
                  <div class="w-32 h-32 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                    <span class="text-white text-4xl font-bold">EA</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Ezequiel Atsuri</h3>
                    <p class="text-blue-100">Desarrollador Full Stack</p>
                  </div>
                  <div class="flex justify-center space-x-4">
                    <div class="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-cyan-300 rounded-full opacity-60 animate-bounce"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Proyectos <span class="text-blue-600">Destacados</span></h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
            <p class="text-xl text-gray-600 mt-4">Algunos de mis trabajos más recientes y exitosos</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">🚀</div>
                  <h3 class="text-2xl font-bold">E-Commerce Platform</h3>
                </div>
              </div>
              <div class="bg-white p-6">
                <h4 class="font-bold text-gray-800 mb-2">Tienda Online Completa</h4>
                <p class="text-gray-600 text-sm mb-4">Plataforma de comercio electrónico con carrito de compras, pagos y panel administrativo.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Angular</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Node.js</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">MongoDB</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="bg-gradient-to-br from-green-500 to-teal-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">📱</div>
                  <h3 class="text-2xl font-bold">App de Gestión</h3>
                </div>
              </div>
              <div class="bg-white p-6">
                <h4 class="font-bold text-gray-800 mb-2">Sistema de Inventarios</h4>
                <p class="text-gray-600 text-sm mb-4">Aplicación web para gestión de inventarios con reportes y análisis en tiempo real.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Express</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">PostgreSQL</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <!-- Project 3 -->
            <div class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="bg-gradient-to-br from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">🎯</div>
                  <h3 class="text-2xl font-bold">Dashboard Analytics</h3>
                </div>
              </div>
              <div class="bg-white p-6">
                <h4 class="font-bold text-gray-800 mb-2">Panel de Control</h4>
                <p class="text-gray-600 text-sm mb-4">Dashboard interactivo con gráficos y métricas para análisis de datos empresariales.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Vue.js</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Python</span>
                  <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Redis</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Ver Proyecto →
                </a>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a 
              routerLink="/projects" 
              class="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Todos los Proyectos
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600">
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
              class="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Mi Trabajo
            </a>
            <a 
              routerLink="/contact" 
              class="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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