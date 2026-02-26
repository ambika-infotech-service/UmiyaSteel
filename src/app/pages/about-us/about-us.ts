import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
  whyFeatures = [
    { icon: 'bi-award', label: 'High Quality Stainless Steel' },
    { icon: 'bi-grid', label: 'Wide Range of Products' },
    { icon: 'bi-gem', label: 'Premium Quality' },
    { icon: 'bi-lightning-charge', label: 'High Weld Strength' },
  ];
}
