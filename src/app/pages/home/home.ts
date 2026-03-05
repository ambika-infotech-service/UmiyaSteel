import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo';

interface CarouselSlide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);
  carouselIndex = signal(0);
  private autoRotateInterval?: number;

  carouselImages: CarouselSlide[] = [
    {
      image: '/home/ic-steel.png',
      alt: 'Stainless Steel Products',
      title: 'India\'s Leading',
      subtitle: 'Stainless Steel Products Supplier',
      description: 'Born from innovative brilliance and bolstered by an unrivaled reputation, our creations today drive the changes of tomorrow.'
    },
    {
      image: '/home/ic-galvanize.png',
      alt: 'Galvanize Products',
      title: 'India\'s Leading',
      subtitle: 'Galvanize Products Supplier',
      description: 'Innovative metal solutions for a brighter tomorrow.'
    },
    {
      image: '/home/ic-copper.png',
      alt: 'Copper Products',
      title: 'India\'s Leading',
      subtitle: 'Copper Products Supplier',
      description: 'Top-quality metal products for every industry.'
    },
  ];

  products: Product[] = [
    {
      id: 'stainless-steel',
      name: 'Stainless Steel',
      description: 'Umiya Steel and Impex offers premium stainless steel, renowned for its exceptional resistance to rust, staining, and corrosion.',
      image: '/home/hp-stainlesssteel.png'
    },
    {
      id: 'aluminum',
      name: 'Aluminum',
      description: 'Our high-quality aluminum products are known for their excellent strength-to-weight ratio, corrosion resistance, and versatility.',
      image: '/home/hp-aluminum.png'
    },
    {
      id: 'copper',
      name: 'Copper',
      description: 'Our copper products are prized for their superior electrical and thermal conductivity, making them essential in electrical wiring, plumbing, and industrial machinery.',
      image: '/home/hp-copper.png'
    },
    {
      id: 'brass',
      name: 'Brass',
      description: 'We provide top-grade brass, an alloy known for its acoustic properties, malleability, and resistance to corrosion.',
      image: '/home/hp-brass.png'
    },
    {
      id: 'mild-steel',
      name: 'Mild Steel',
      description: 'Umiya Steel and Impex supplies mild steel, valued for its excellent weldability, machinability, and cost-effectiveness.',
      image: '/home/hp-mildsteel.png'
    },
    {
      id: 'galvanize',
      name: 'Galvanized Steel',
      description: 'Our galvanized steel products offer superior corrosion resistance and durability for long-lasting performance.',
      image: '/home/hp-galvanize.png'
    }
  ];

  features: Feature[] = [
    {
      title: 'High Quality Stainless Steel',
      description: 'Premium materials meeting international standards',
      icon: 'check-circle'
    },
    {
      title: 'Wide Range of Products',
      description: 'Comprehensive selection for all your metal needs',
      icon: 'boxes'
    },
    {
      title: 'Premium Quality',
      description: 'Top-grade materials and consistent excellence',
      icon: 'star'
    },
    {
      title: 'High Weld Strength',
      description: 'Maximum durability and reliability',
      icon: 'hammer'
    }
  ];

  faqs: Faq[] = [
    {
      question: 'Which metal products does Umiya Steel and Impex supply?',
      answer: 'We supply stainless steel, aluminum, copper, brass, mild steel, and galvanized steel products for industrial and commercial use.'
    },
    {
      question: 'Do you provide product-specific quotes?',
      answer: 'Yes, you can request a quote by sharing your requirement details through the Contact Us page or WhatsApp button.'
    },
    {
      question: 'Can I order products for different industries?',
      answer: 'Yes, our products are used across construction, manufacturing, electrical, plumbing, automotive, and infrastructure sectors.'
    },
    {
      question: 'Where can I view detailed product specifications?',
      answer: 'Visit the Products page and open any product detail page to review its overview, variants, and salient features.'
    }
  ];

  nextSlide() {
    this.carouselIndex.update(i => (i + 1) % this.carouselImages.length);
  }

  prevSlide() {
    this.carouselIndex.update(i => (i - 1 + this.carouselImages.length) % this.carouselImages.length);
  }

  goToSlide(index: number) {
    this.carouselIndex.set(index);
  }

  ngOnInit() {
    this.startAutoRotate();
    this.seo.upsertJsonLd('home-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  ngOnDestroy() {
    this.stopAutoRotate();
    this.seo.removeJsonLd('home-faq');
  }

  private startAutoRotate() {
    this.autoRotateInterval = window.setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }
}
