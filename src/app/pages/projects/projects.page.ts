import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProyectsComponent } from '../../components/proyects/proyects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ProyectsComponent],
  template: `
    <!-- Página de proyectos -->
    <!-- Aquí puedes agregar filtros, búsqueda, categorías, etc. -->
    <app-proyects></app-proyects>
  `,
  styles: []
})
export class ProjectsPage implements OnInit {
  
  ngOnInit() {
    // Lógica específica de la página de proyectos
    this.setPageTitle();
    this.trackPageView();
  }

  private setPageTitle() {
    // Cambiar el título de la página
    document.title = 'Ezequiel - Portafolio de Proyectos';
  }

  private trackPageView() {
    // Aquí podrías agregar analytics
    console.log('Página de proyectos visitada');
  }
} 