import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">Contácta<span class="text-blue-600">me</span></h1>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Información de contacto -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">¡Hablemos!</h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar? 
                No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades 
                y emocionado por escuchar sobre tus ideas.
              </p>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-6">
                  <span class="text-white text-2xl">📧</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                  <p class="text-gray-600">ezequiel@ejemplo.com</p>
                </div>
              </div>
              
              <div class="flex items-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mr-6">
                  <span class="text-white text-2xl">📱</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Teléfono</h3>
                  <p class="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>
              
              <div class="flex items-center p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-6">
                  <span class="text-white text-2xl">📍</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Ubicación</h3>
                  <p class="text-gray-600">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Sígueme</h3>
              <div class="flex justify-center space-x-4">
                <a href="#" class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">in</span>
                </a>
                <a href="#" class="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">gh</span>
                </a>
                <a href="#" class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">tw</span>
                </a>
                <a href="#" class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                  <span class="text-lg font-bold">yt</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Formulario de contacto -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Envíame un mensaje</h2>
            
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Tu nombre completo"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="tu@email.com"
                  >
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="¿En qué puedo ayudarte?"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="6"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, ideas o cualquier consulta que tengas..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactComponent {} 