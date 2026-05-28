import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-950 text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute -top-24 right-0 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/15 blur-3xl rounded-full"></div>
      </div>
      <div class="relative max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Sobre <span class="text-cyan-300">Mí</span></h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-white mb-6">¿Quién soy?</h2>
              <p class="text-lg text-slate-200/90 leading-relaxed mb-6">
                Soy un <strong class="text-cyan-300">Estudiante de Ingeniería en Sistemas Computacionales</strong> con vocación por el desarrollo de software y el aprendizaje continuo. 
                Me especializo en desarrollo web full-stack con un enfoque en experiencias de usuario excepcionales.
              </p>
              <p class="text-lg text-slate-200/90 leading-relaxed mb-6">
                Me mantengo actualizado con las últimas tendencias tecnológicas a través de mi formación académica y plataformas educativas como <strong class="text-cyan-300">Platzi</strong>. 
                Soy una persona proactiva, curiosa y comprometida con mi desarrollo profesional.
              </p>
              <p class="text-lg text-slate-200/90 leading-relaxed">
                Mi objetivo es crear aplicaciones que no solo funcionen perfectamente, 
                sino que también inspiren y faciliten la vida de las personas. 
                Estoy en busca de oportunidades para aplicar mis conocimientos en proyectos reales que generen impacto.
              </p>
            </div>
            
            
          </div>
          
          <div class="bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-8 text-center">Mis Especialidades</h3>
            <div class="space-y-6">
              <div class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">⚛️</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Desarrollo Frontend</h4>
                  <p class="text-slate-200">Next.js, React</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🔧</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Desarrollo Backend</h4>
                  <p class="text-slate-200">Spring Boot, Laravel, Java</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🗄️</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Bases de Datos</h4>
                  <p class="text-slate-200">MySQL</p>
                </div>
              </div>
              
              <div class="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span class="text-white text-xl">🎨</span>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Diseño UX/UI</h4>
                  <p class="text-slate-200">Responsive, Accesible, Moderno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {} 