import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-950 text-white">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/60 to-slate-950">
        <div class="absolute inset-0">
          <div class="absolute -top-32 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div class="absolute -bottom-32 left-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>
        </div>
        <div class="relative max-w-6xl mx-auto px-6 py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Content -->
            <div class="space-y-10 max-w-xl">
              <div class="space-y-4">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Hola, soy <span class="text-cyan-300">Ezequiel Atsuri</span>
                </h1>
                <h2 class="text-2xl sm:text-3xl text-slate-200 font-medium">
                  Desarrollador Full Stack
                </h2>
                <p class="text-lg sm:text-xl text-slate-200/90 leading-relaxed">
                  Transformo ideas en experiencias digitales. 
                  Especializado en crear soluciones web innovadoras que conectan 
                  tecnología con creatividad.
                </p>
              </div>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  routerLink="/projects" 
                  class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 text-center"
                >
                  Ver Proyectos
                </a>
                <a 
                  routerLink="/contact" 
                  class="border border-cyan-300/60 text-cyan-100 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg text-center transition-all"
                >
                  Contactar
                </a>
              </div>
            </div>
            
            <!-- Hero Image/Illustration -->
            <div class="relative">
              <div class="bg-white/5 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/10 transition-transform hover:-translate-y-1">
                <div class="text-center space-y-6">
                  <div class="w-32 h-32 bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                    <span class="text-white text-4xl font-bold">EA</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Ezequiel Atsuri</h3>
                    <p class="text-slate-200">Desarrollador Full Stack</p>
                  </div>
                  <div class="flex justify-center space-x-4">
                    <div class="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-6 -right-6 w-10 h-10 bg-cyan-400/70 rounded-full blur-sm animate-bounce"></div>
              <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-500/70 rounded-full blur-sm animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos <span class="text-blue-600">Destacados</span></h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
            <p class="text-lg text-slate-600 mt-4">Algunos de mis trabajos más recientes y exitosos</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 hover:shadow-2xl border border-slate-200/70 transition-all hover:-translate-y-1">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">💼</div>
                  <h3 class="text-2xl font-bold">Plataforma de Servicios</h3>
                </div>
              </div>
              <div class="p-6">
                <h4 class="font-bold text-slate-900 mb-2">Promoción y Contratación</h4>
                <p class="text-slate-600 text-sm mb-4">Aplicación web para la promoción y contratación de servicios profesionales.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">Spring Boot</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">MySQL</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center gap-1 transition-all hover:translate-x-1">
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 hover:shadow-2xl border border-slate-200/70 transition-all hover:-translate-y-1">
              <div class="bg-gradient-to-br from-green-500 to-teal-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">💬</div>
                  <h3 class="text-2xl font-bold">Chat en Tiempo Real</h3>
                </div>
              </div>
              <div class="p-6">
                <h4 class="font-bold text-slate-900 mb-2">Sistema de Mensajería</h4>
                <p class="text-slate-600 text-sm mb-4">Aplicación de chat con funcionalidades de mensajería en tiempo real.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Laravel</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">MySQL</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center gap-1 transition-all hover:translate-x-1">
                  Ver Proyecto →
                </a>
              </div>
            </div>

            <!-- Project 3 -->
            <div class="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 hover:shadow-2xl border border-slate-200/70 transition-all hover:-translate-y-1">
              <div class="bg-gradient-to-br from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">🔧</div>
                  <h3 class="text-2xl font-bold">Gestión de Taller</h3>
                </div>
              </div>
              <div class="p-6">
                <h4 class="font-bold text-slate-900 mb-2">Sistema Mecánico</h4>
                <p class="text-slate-600 text-sm mb-4">Aplicación para la gestión completa de un taller mecánico automotriz.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Laravel</span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Blade</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">MySQL</span>
                </div>
                <a href="#" class="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center gap-1 transition-all hover:translate-x-1">
                  Ver Proyecto →
                </a>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <a 
              routerLink="/projects" 
              class="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
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
      <section class="py-20 bg-slate-950">
        <div class="max-w-4xl mx-auto px-6">
          <div class="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 p-12 text-center shadow-2xl border border-white/10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para crear algo increíble juntos?
            </h2>
            <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Tengo la pasión y las habilidades para convertir tu visión en una realidad digital. 
              Trabajemos juntos para crear algo extraordinario.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                routerLink="/projects" 
                class="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
              >
                Ver Mi Trabajo
              </a>
              <a 
                routerLink="/contact" 
                class="border border-cyan-300/60 text-cyan-100 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                Iniciar Conversación
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent {} 