import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">Mis <span class="text-blue-600">Proyectos</span></h1>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Proyecto 1 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">🛒</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">E-Commerce Platform</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Plataforma completa de comercio electrónico con carrito de compras, 
                sistema de pagos integrado y panel de administración avanzado.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Node.js</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">MongoDB</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">Stripe</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 2 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">📋</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Task Management App</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Aplicación de gestión de tareas con drag & drop, categorías, 
                recordatorios y colaboración en tiempo real.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">Socket.io</span>
                <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">Redis</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium">JWT</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 3 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">📝</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog API</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                API RESTful para gestión de blogs con autenticación JWT, 
                subida de imágenes y sistema de comentarios.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Express.js</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">MongoDB</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">JWT</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">Multer</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 4 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">📊</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Dashboard Analytics</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Panel de control con gráficos interactivos, métricas en tiempo real 
                y reportes personalizables para análisis de datos.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Chart.js</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">WebSocket</span>
                <span class="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full font-medium">PostgreSQL</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 5 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">🔐</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Auth System</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Sistema de autenticación completo con registro, login, 
                recuperación de contraseña y autenticación de dos factores.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Node.js</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">JWT</span>
                <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">Nodemailer</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>

          <!-- Proyecto 6 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div class="h-48 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <span class="text-white text-4xl font-bold relative z-10">📱</span>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Mobile App</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Aplicación móvil híbrida con funcionalidades offline, 
                notificaciones push y sincronización de datos.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Ionic</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">Capacitor</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">Firebase</span>
              </div>
              <div class="flex space-x-3">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Ver Demo
                </button>
                <button class="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                  Código
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProyectsComponent {} 