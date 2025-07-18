import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Brand Section -->
          <div class="md:col-span-2">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                <span class="text-white text-xl font-bold">E</span>
              </div>
              <h3 class="text-2xl font-bold">Ezequiel</h3>
            </div>
            <p class="text-gray-400 mb-6 leading-relaxed">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. 
              Transformando ideas en realidades a través del código.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">in</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span class="text-sm font-bold">gh</span>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span class="text-sm font-bold">tw</span>
              </a>
              <a href="#" class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <span class="text-sm font-bold">yt</span>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul class="space-y-3">
              <li>
                <a routerLink="/home" class="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a routerLink="/about" class="text-gray-400 hover:text-white transition-colors">Sobre Mí</a>
              </li>
              <li>
                <a routerLink="/skills" class="text-gray-400 hover:text-white transition-colors">Habilidades</a>
              </li>
              <li>
                <a routerLink="/projects" class="text-gray-400 hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          <!-- Services -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Servicios</h4>
            <ul class="space-y-3">
              <li class="text-gray-400">Desarrollo Web</li>
              <li class="text-gray-400">Aplicaciones Web</li>
              <li class="text-gray-400">E-commerce</li>
              <li class="text-gray-400">APIs REST</li>
              <li class="text-gray-400">Mantenimiento</li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="border-t border-gray-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
              © 2024 Ezequiel. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {} 