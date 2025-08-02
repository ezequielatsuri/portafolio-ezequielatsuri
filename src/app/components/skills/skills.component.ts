import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-white mb-4">Mis <span class="text-cyan-300">Habilidades</span></h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Frontend Development -->
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-3xl">⚛️</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Frontend Development</h3>
              <p class="text-blue-100">Interfaces modernas y responsivas</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Next.js</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">React</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">HTML/CSS</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
            </div>
          </div>

          <!-- Backend Development -->
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-3xl">🔧</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Backend Development</h3>
              <p class="text-blue-100">APIs robustas y escalables</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Spring Boot</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Laravel</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Java</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">PHP</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">REST APIs</span>
            </div>
          </div>

          <!-- Database & Tools -->
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-center mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span class="text-white text-3xl">🗄️</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Database & Tools</h3>
              <p class="text-blue-100">Gestión de datos y herramientas</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">MySQL</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Git</span>
              <span class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">Linux</span>
              
            </div>
          </div>
        </div>

        <!-- Additional Skills Section -->
        <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          <h3 class="text-3xl font-bold text-white text-center mb-8">Otras Habilidades</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            
            <div class="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300">
              <div class="text-2xl mb-2">📱</div>
              <div class="text-blue-100 text-sm font-medium">Responsive Design</div>
            </div>
            <div class="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300">
              <div class="text-2xl mb-2">🔒</div>
              <div class="text-blue-100 text-sm font-medium">Security</div>
            </div>
            <div class="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300">
              <div class="text-2xl mb-2">⚡</div>
              <div class="text-blue-100 text-sm font-medium">Performance</div>
            </div>
            <div class="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300">
              <div class="text-2xl mb-2">🤝</div>
              <div class="text-blue-100 text-sm font-medium">Team Work</div>
            </div>
            <div class="bg-white/10 p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300">
              <div class="text-2xl mb-2">📚</div>
              <div class="text-blue-100 text-sm font-medium">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SkillsComponent {} 