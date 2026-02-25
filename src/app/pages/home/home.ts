import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  features = [
    {
      title: 'Premium Quality',
      description: 'We provide high-grade metals and steel products that meet international standards.',
      icon: 'check-circle'
    },
    {
      title: 'Wide Range',
      description: 'Our extensive product portfolio includes stainless steel, aluminum, copper, brass, and more.',
      icon: 'boxes'
    },
    {
      title: 'Reliable Delivery',
      description: 'Fast and dependable shipping to meet your project deadlines.',
      icon: 'truck'
    },
    {
      title: 'Expert Support',
      description: 'Our team of experts is ready to assist you with product selection and technical guidance.',
      icon: 'people'
    }
  ];
}
