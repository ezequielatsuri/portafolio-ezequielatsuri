import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: `
    <app-contact></app-contact>
  `,
  styles: []
})
export class ContactPage {} 