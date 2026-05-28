import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-900/10 fixed w-full top-0 z-50 border-b border-white/30">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <a routerLink="/" class="flex items-center">
              <img src="assets/images/logo_ezequiel1.png" alt="Ezequiel Logo" class="h-12 w-auto">
            </a>
            <!-- Status Indicator -->
            <div class="hidden md:flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span class="text-emerald-700 text-sm font-semibold">Disponible</span>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" routerLinkActive="text-blue-600 after:scale-x-100" 
               class="relative text-slate-700 hover:text-blue-600 font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform hover:after:scale-x-100">
              Inicio
            </a>
            <a routerLink="/about" routerLinkActive="text-blue-600 after:scale-x-100" 
               class="relative text-slate-700 hover:text-blue-600 font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform hover:after:scale-x-100">
              Sobre Mí
            </a>
            <a routerLink="/skills" routerLinkActive="text-blue-600 after:scale-x-100" 
               class="relative text-slate-700 hover:text-blue-600 font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform hover:after:scale-x-100">
              Habilidades
            </a>
            <a routerLink="/projects" routerLinkActive="text-blue-600 after:scale-x-100" 
               class="relative text-slate-700 hover:text-blue-600 font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform hover:after:scale-x-100">
              Proyectos
            </a>
            <a routerLink="/contact" routerLinkActive="text-blue-600 after:scale-x-100" 
               class="relative text-slate-700 hover:text-blue-600 font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:transition-transform hover:after:scale-x-100">
              Contacto
            </a>
          </div>
          
          <!-- CTA Button -->
          <div class="hidden md:block">
            <a 
              href="assets/doc/cv.pdf"
              target="_blank"
              class="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-cyan-500/20 inline-block transition-all hover:-translate-y-0.5"
            >
              📄 Descargar CV
            </a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              (click)="toggleMobileMenu()"
              class="text-slate-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-white/40 shadow-lg">
            <a routerLink="/" routerLinkActive="text-blue-600 font-semibold"
               (click)="onMobileNavClick()"
               class="block px-3 py-3 text-slate-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-blue-50/80 transition-colors">
              Inicio
            </a>
            <a routerLink="/about" routerLinkActive="text-blue-600 font-semibold"
               (click)="onMobileNavClick()"
               class="block px-3 py-3 text-slate-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-blue-50/80 transition-colors">
              Sobre Mí
            </a>
            <a routerLink="/skills" routerLinkActive="text-blue-600 font-semibold"
               (click)="onMobileNavClick()"
               class="block px-3 py-3 text-slate-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-blue-50/80 transition-colors">
              Habilidades
            </a>
            <a routerLink="/projects" routerLinkActive="text-blue-600 font-semibold"
               (click)="onMobileNavClick()"
               class="block px-3 py-3 text-slate-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-blue-50/80 transition-colors">
              Proyectos
            </a>
            <a routerLink="/contact" routerLinkActive="text-blue-600 font-semibold"
               (click)="onMobileNavClick()"
               class="block px-3 py-3 text-slate-700 hover:text-blue-600 font-semibold rounded-xl hover:bg-blue-50/80 transition-colors">
              Contacto
            </a>
            <div class="px-3 py-3">
              <a 
                href="assets/doc/cv.pdf"
                target="_blank"
                class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold inline-block text-center shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
              >
                📄 Descargar CV
              </a>
            </div>
          </div>
        }
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

  onMobileNavClick() {
    this.mobileMenuOpen = false;
    window.scrollTo({ top: 0 });
  }
}