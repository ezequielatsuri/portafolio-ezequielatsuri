import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-white mb-4">Contácta<span class="text-cyan-300">me</span></h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Información de contacto -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-white mb-6">¡Hablemos!</h2>
              <p class="text-lg text-blue-100 leading-relaxed">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
                No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades 
                y emocionado por escuchar sobre tus ideas.
              </p>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                  <span class="text-white text-2xl">📧</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">Email</h3>
                  <p class="text-blue-100">ezequielatsuri@gmail.com</p>
                </div>
              </div>
              
              <div class="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                  <span class="text-white text-2xl">📍</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-1">Ubicación</h3>
                  <p class="text-blue-100">Oaxaca, Mexico</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">Sígueme</h3>
              <div class="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/ezequielatsuri/" target="_blank" class="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">in</span>
                </a>
                <a href="https://github.com/ezequielatsuri" target="_blank" class="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">git</span>
                </a>
                <a href="https://x.com/ezequielatsuri" target="_blank" class="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">tw</span>
                </a>
                
              </div>
            </div>
          </div>
          
          <!-- Formulario de contacto -->
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Envíame un mensaje</h2>
            
            <!-- Mensajes de estado -->
            @if (isLoading) {
              <div class="text-center mb-4">
                <p class="text-blue-100">Enviando mensaje...</p>
              </div>
            }
            @if (isSuccess) {
              <div class="text-center mb-4">
                <p class="text-green-400 font-semibold">¡Mensaje enviado exitosamente!</p>
              </div>
            }
            @if (isError) {
              <div class="text-center mb-4">
                <p class="text-red-400 font-semibold">Error al enviar el mensaje. Inténtalo de nuevo.</p>
              </div>
            }
            
            <form #contactForm="ngForm" (ngSubmit)="sendEmail(contactForm)" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-white mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-800 placeholder-gray-500 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-semibold text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    class="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-800 placeholder-gray-500 transition-all duration-300"
                    placeholder="tu@email.com"
                  >
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-semibold text-white mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-800 placeholder-gray-500 transition-all duration-300"
                  placeholder="¿En qué puedo ayudarte?"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-semibold text-white mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-gray-800 placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                [disabled]="contactForm.invalid || isLoading"
                class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {{ isLoading ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  isSuccess = false;
  isError = false;

  async sendEmail(form: any) {
    if (form.invalid) return;

    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;

    try {
      // Reemplaza estos valores con los tuyos de EmailJS
      const serviceId = 'service_eicap4m';
      const templateId = 'template_udg9a4j';
      const publicKey = 'hpM4yiX_CynyfeJXl';

      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
        to_email: 'ezequielatsuri@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      this.isSuccess = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
      form.resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
} 