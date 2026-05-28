import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-slate-950 text-slate-200 border-t border-white/10">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Brand Section -->
          <div class="md:col-span-2">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-cyan-500/20">
                <span class="text-white text-xl font-bold">E</span>
              </div>
              <h3 class="text-2xl font-bold">Ezequiel Atsuri</h3>
            </div>
            <p class="text-slate-300 mb-6 leading-relaxed">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. 
              Transformando ideas en realidades a través del código.
            </p>
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/in/ezequielatsuri/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <span class="text-sm font-bold">in</span>
              </a>
              <a href="https://x.com/ezequielatsuri" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span class="text-sm font-bold">tw</span>
              </a>
              <a href="https://github.com/ezequielatsuri" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <span class="text-sm font-bold">git</span>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul class="space-y-3 ">
              <li>
                <a routerLink="/" class="text-slate-300 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a routerLink="/about" class="text-slate-300 hover:text-white transition-colors">Sobre Mí</a>
              </li>
              <li>
                <a routerLink="/skills" class="text-slate-300 hover:text-white transition-colors">Habilidades</a>
              </li>
              <li>
                <a routerLink="/projects" class="text-slate-300 hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-slate-300 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="border-t border-white/10 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-slate-400 text-sm">
              © 2025 Ezequiel Atsuri. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a routerLink="/privacy" class="text-slate-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {} 