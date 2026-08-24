import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  title: string = 'Contact';

  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  contactForm = new FormGroup({
    name: this.name,
    email: this.email,
    message: this.message
  });

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Console log form values for demo and testing purposes
    } else {
      console.log('Form is invalid');
    }
  }
}
