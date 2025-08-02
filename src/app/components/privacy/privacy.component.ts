import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-16">
      <div class="max-w-4xl mx-auto px-6">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-white mb-4">Política de <span class="text-cyan-300">Privacidad</span></h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
          <p class="text-blue-100 mt-4">Última actualización: Enero 2025</p>
        </div>

        <!-- Content -->
        <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          <div class="space-y-8 text-gray-800">
            
            <!-- Introducción -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">1. Información General</h2>
              <p class="text-blue-100 leading-relaxed">
                Esta Política de Privacidad describe cómo Ezequiel Atsuri ("yo", "mi", "mío") recopila, 
                utiliza y protege la información que usted proporciona cuando utiliza mi portafolio web 
                personal. Esta política se aplica únicamente a este sitio web.
              </p>
            </section>

            <!-- Información que recopilamos -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
              <p class="text-blue-100 mb-4 leading-relaxed">
                A través del formulario de contacto, puedo recopilar la siguiente información:
              </p>
              <ul class="list-disc list-inside text-blue-100 space-y-2 ml-4">
                <li><strong>Nombre completo:</strong> Para dirigirme a usted de manera personal</li>
                <li><strong>Dirección de correo electrónico:</strong> Para responder a su consulta</li>
                <li><strong>Asunto:</strong> Para entender el propósito de su contacto</li>
                <li><strong>Mensaje:</strong> El contenido de su consulta o propuesta</li>
              </ul>
            </section>

            <!-- Cómo usamos la información -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">3. Cómo Utilizamos su Información</h2>
              <p class="text-blue-100 mb-4 leading-relaxed">
                La información que recopilo se utiliza exclusivamente para:
              </p>
              <ul class="list-disc list-inside text-blue-100 space-y-2 ml-4">
                <li>Responder a sus consultas y mensajes</li>
                <li>Proporcionar información sobre mis servicios profesionales</li>
                <li>Mantener comunicación relacionada con proyectos o colaboraciones</li>
                <li>Mejorar la experiencia del usuario en mi portafolio</li>
              </ul>
            </section>

            <!-- Protección de datos -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">4. Protección de Datos</h2>
              <p class="text-blue-100 leading-relaxed">
                Me comprometo a proteger su información personal. No vendo, alquilo, 
                ni comparto su información personal con terceros, excepto cuando sea 
                necesario para responder a su consulta o cuando la ley lo requiera.
              </p>
            </section>

            <!-- Cookies -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">5. Cookies y Tecnologías Similares</h2>
              <p class="text-blue-100 leading-relaxed">
                Este sitio web no utiliza cookies de seguimiento ni tecnologías similares 
                para recopilar información personal. Solo se utilizan cookies técnicas 
                necesarias para el funcionamiento básico del sitio.
              </p>
            </section>

            <!-- Sus derechos -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">6. Sus Derechos</h2>
              <p class="text-blue-100 mb-4 leading-relaxed">
                Usted tiene derecho a:
              </p>
              <ul class="list-disc list-inside text-blue-100 space-y-2 ml-4">
                <li>Solicitar acceso a la información personal que tengo sobre usted</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <!-- Contacto -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">7. Contacto</h2>
              <p class="text-blue-100 leading-relaxed">
                Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo 
                manejo su información personal, puede contactarme a través del formulario 
                de contacto en este sitio web o directamente a mi correo electrónico.
              </p>
            </section>

            <!-- Cambios en la política -->
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">8. Cambios en esta Política</h2>
              <p class="text-blue-100 leading-relaxed">
                Me reservo el derecho de actualizar esta Política de Privacidad en cualquier 
                momento. Los cambios entrarán en vigor inmediatamente después de su publicación 
                en este sitio web. Se recomienda revisar esta política periódicamente.
              </p>
            </section>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-12">
          <a 
            routerLink="/home" 
            class="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PrivacyComponent {} 