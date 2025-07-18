import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">Mis <span class="text-blue-600">Habilidades</span></h1>
          <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl">⚛️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Frontend</h3>
            </div>
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Angular</span>
                  <span class="text-blue-600 font-semibold">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">TypeScript</span>
                  <span class="text-blue-600 font-semibold">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">HTML/CSS</span>
                  <span class="text-blue-600 font-semibold">98%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 98%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">React</span>
                  <span class="text-blue-600 font-semibold">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl">🔧</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Backend</h3>
            </div>
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Node.js</span>
                  <span class="text-blue-600 font-semibold">88%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 88%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Express.js</span>
                  <span class="text-blue-600 font-semibold">92%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 92%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Python</span>
                  <span class="text-blue-600 font-semibold">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Django</span>
                  <span class="text-blue-600 font-semibold">75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Database & Tools -->
          <div class="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-2xl">🗄️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Base de Datos & Herramientas</h3>
            </div>
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">MongoDB</span>
                  <span class="text-blue-600 font-semibold">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">PostgreSQL</span>
                  <span class="text-blue-600 font-semibold">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Git</span>
                  <span class="text-blue-600 font-semibold">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">Docker</span>
                  <span class="text-blue-600 font-semibold">75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style="width: 75%"></div>
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
export class SkillsComponent {} 