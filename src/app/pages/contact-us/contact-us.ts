import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, NgOptimizedImage, RouterLink],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUs {
  private fb = new FormBuilder();

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submitted = signal(false);
  submitSuccess = signal(false);

  onSubmit() {
    this.submitted.set(true);
    if (this.contactForm.valid) {
      // Simulate form submission
      setTimeout(() => {
        this.submitSuccess.set(true);
        this.contactForm.reset();
        this.submitted.set(false);
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      }, 1000);
    }
  }
}

