import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-blue-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <a routerLink="/" class="flex items-center">
              <img src="/images/logo_ezequiel1.png" alt="Ezequiel Logo" class="h-12 w-auto">
            </a>
            <!-- Status Indicator -->
            <div class="hidden md:flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-green-700 text-sm font-medium">Disponible</span>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a routerLink="/home" routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
              Inicio
            </a>
            <a routerLink="/about" routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
              Sobre Mí
            </a>
            <a routerLink="/skills" routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
              Habilidades
            </a>
            <a routerLink="/projects" routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
              Proyectos
            </a>
            <a routerLink="/contact" routerLinkActive="text-blue-600 font-semibold" 
               class="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium">
              Contacto
            </a>
          </div>
          
          <!-- CTA Button -->
          <div class="hidden md:block">
            <button class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Descargar CV
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              (click)="toggleMobileMenu()"
              class="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div *ngIf="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-blue-100">
            <a routerLink="/home" routerLinkActive="text-blue-600 font-semibold" 
               class="block px-3 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Inicio
            </a>
            <a routerLink="/about" routerLinkActive="text-blue-600 font-semibold" 
               class="block px-3 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Sobre Mí
            </a>
            <a routerLink="/skills" routerLinkActive="text-blue-600 font-semibold" 
               class="block px-3 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Habilidades
            </a>
            <a routerLink="/projects" routerLinkActive="text-blue-600 font-semibold" 
               class="block px-3 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Proyectos
            </a>
            <a routerLink="/contact" routerLinkActive="text-blue-600 font-semibold" 
               class="block px-3 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
              Contacto
            </a>
            <div class="px-3 py-3">
              <button class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Spacer to prevent content from hiding behind fixed navbar -->
    <div class="h-16"></div>
  `,
  styles: []
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
} 