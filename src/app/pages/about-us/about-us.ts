import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
  values = [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in product quality and consistency.'
    },
    {
      title: 'Reliability',
      description: 'Our customers can depend on us for timely delivery and excellent service.'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead with the latest technologies and industry practices.'
    },
    {
      title: 'Integrity',
      description: 'Honesty and transparency are at the core of our business relationships.'
    }
  ];
}
