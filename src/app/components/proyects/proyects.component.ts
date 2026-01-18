import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-white mb-4">Mis <span class="text-cyan-300">Proyectos</span></h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Proyecto 1 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <!-- Carrusel Proyecto 1 -->
              <ng-container *ngIf="proyecto1Images.length > 0">
                <button (click)="prevImage(1)" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8592;</span></button>
                <img [src]="proyecto1Images[proyecto1Index]" alt="Proyecto 1" class="h-40 rounded-xl shadow-lg z-10 relative transition-all duration-300" style="object-fit:cover; max-width:80%">
                <button (click)="nextImage(1)" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8594;</span></button>
              </ng-container>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">Plataforma de Servicios</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Aplicación web para la promoción y contratación de servicios profesionales.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Next.js</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Spring Boot</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">MySQL</span>
              </div>
              <div class="flex space-x-3">
                <a 
                  href="https://github.com/ezequielatsuri/web_app_services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 2 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <!-- Carrusel Proyecto 2 -->
              <ng-container *ngIf="proyecto2Images.length > 0">
                <button (click)="prevImage(2)" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8592;</span></button>
                <img [src]="proyecto2Images[proyecto2Index]" alt="Proyecto 2" class="h-40 rounded-xl shadow-lg z-10 relative transition-all duration-300" style="object-fit:cover; max-width:80%">
                <button (click)="nextImage(2)" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8594;</span></button>
              </ng-container>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">Chat</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Aplicación de chat con funcionalidades de mensajería.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Laravel</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">React</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">MySQL</span>
              </div>
              <div class="flex space-x-3">
                
                <a 
                  href="https://github.com/ezequielatsuri/chatAplication" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 3 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">🔧</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">Gestión de Taller</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Aplicación para la gestión completa de un taller mecánico automotriz.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Laravel</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Blade</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">MySQL</span>
              </div>
              <div class="flex space-x-3">
                <a 
                  href="https://github.com/ezequielatsuri/TallerMecanico" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 4 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">✅</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">To-Do List</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Aplicación de gestión de tareas con Java Empresarial, diseñada para llevar el control de las tareas individuales.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Java</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">JEE</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">JPA</span>
              </div>
              <div class="flex space-x-3">
                <a 
                  href="https://github.com/ezequielatsuri/To-do-list" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>

              </div>
            </div>
          </div>

          <!-- Proyecto 5 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <!-- Carrusel Proyecto 5 -->
              <ng-container *ngIf="proyecto5Images.length > 0">
                <button (click)="prevImage(5)" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8592;</span></button>
                <img [src]="proyecto5Images[proyecto5Index]" alt="Proyecto 5" class="h-40 rounded-xl shadow-lg z-10 relative transition-all duration-300" style="object-fit:cover; max-width:80%">
                <button (click)="nextImage(5)" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 rounded-full p-1"><span class="text-2xl">&#8594;</span></button>
              </ng-container>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">Dashboard Dinámico</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Dashboard interactivo con procesamiento ETL de datos desde Excel, 
                análisis en tiempo real y visualizaciones dinámicas.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Python</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">ETL</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Excel</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Streamlit</span>
              </div>
              <div class="flex space-x-3">
                <a 
                  href="https://github.com/ezequielatsuri/dashboard-dinamico" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>
              </div>
            </div>
          </div>

          <!-- Proyecto 6 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">🏥</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-4">App de Salud</h3>
              <p class="text-blue-100 mb-6 leading-relaxed">
                Aplicación para medición de indicadores de salud como IMC, ICC, 
                registro de peso y seguimiento de progreso personal.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Prime Faces</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">Java EE</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">MySQL</span>
                <span class="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium">JPA</span>
              </div>
              <div class="flex space-x-3">
                 <a 
                  href="https://github.com/ezequielatsuri/App-Salud" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProyectsComponent {
  proyecto1Images = ['assets/images/proyecto1.1.png', 'assets/images/proyecto1.2.png', 'assets/images/proyecto1.3.png'];
  proyecto2Images = ['assets/images/proyecto2.1.png', 'assets/images/proyecto2.2.png', 'assets/images/proyecto2.3.png'];
  proyecto5Images = ['assets/images/proyecto5.1.png', 'assets/images/proyecto5.2.png', 'assets/images/proyecto5.3.png'];
  proyecto1Index = 0;
  proyecto2Index = 0;
  proyecto5Index = 0;

  prevImage(proyecto: number) {
    if (proyecto === 1) {
      this.proyecto1Index = (this.proyecto1Index + this.proyecto1Images.length - 1) % this.proyecto1Images.length;
    } else if (proyecto === 2) {
      this.proyecto2Index = (this.proyecto2Index + this.proyecto2Images.length - 1) % this.proyecto2Images.length;
    } else if (proyecto === 5) {
      this.proyecto5Index = (this.proyecto5Index + this.proyecto5Images.length - 1) % this.proyecto5Images.length;
    }
  }
  nextImage(proyecto: number) {
    if (proyecto === 1) {
      this.proyecto1Index = (this.proyecto1Index + 1) % this.proyecto1Images.length;
    } else if (proyecto === 2) {
      this.proyecto2Index = (this.proyecto2Index + 1) % this.proyecto2Images.length;
    } else if (proyecto === 5) {
      this.proyecto5Index = (this.proyecto5Index + 1) % this.proyecto5Images.length;
    }
  }
} 