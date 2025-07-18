import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent],
  template: `
    <!-- Aquí puedes agregar lógica adicional específica de la página -->
    <!-- Por ejemplo: meta tags, analytics, breadcrumbs, etc. -->
    <app-home></app-home>
  `,
  styles: []
})
export class HomePage implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    // Lógica específica de la página de inicio
    // Por ejemplo: analytics, meta tags, etc.
    this.setPageTitle();
    this.trackPageView();
  }

  private setPageTitle() {
    // Cambiar el título de la página solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      document.title = 'Ezequiel - Desarrollador Full Stack | Inicio';
    }
  }

  private trackPageView() {
    // Aquí podrías agregar analytics
    console.log('Página de inicio visitada');
  }
} 