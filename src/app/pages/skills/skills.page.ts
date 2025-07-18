import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  template: `
    <app-skills></app-skills>
  `,
  styles: []
})
export class SkillsPage {} 