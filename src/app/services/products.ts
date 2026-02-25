import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Stainless Steel',
      slug: 'stainless-steel',
      description: 'High-quality stainless steel products known for corrosion resistance and durability.',
      features: [
        'Excellent corrosion resistance',
        'High strength and durability',
        'Easy to clean and maintain',
        'Aesthetic appeal',
        'Long service life'
      ],
      applications: [
        'Kitchen equipment',
        'Medical instruments',
        'Industrial piping',
        'Architectural structures',
        'Food processing equipment'
      ],
      image: '/assets/stainless-steel.jpg',
      color: '#C0C0C0'
    },
    {
      id: '2',
      name: 'Aluminium',
      slug: 'aluminium',
      description: 'Lightweight aluminum products for various industrial and commercial applications.',
      features: [
        'Lightweight',
        'Good electrical conductivity',
        'High corrosion resistance',
        'Easy to machine',
        'Cost-effective'
      ],
      applications: [
        'Aircraft components',
        'Automotive parts',
        'Building materials',
        'Electrical conductors',
        'Consumer products'
      ],
      image: '/assets/aluminium.jpg',
      color: '#D3D3D3'
    },
    {
      id: '3',
      name: 'Copper',
      slug: 'copper',
      description: 'Premium copper materials for electrical and thermal applications.',
      features: [
        'Excellent electrical conductivity',
        'High thermal conductivity',
        'Corrosion resistant',
        'Non-magnetic',
        'Antimicrobial properties'
      ],
      applications: [
        'Electrical wiring',
        'Heat exchangers',
        'Roofing materials',
        'Plumbing systems',
        'Electronics'
      ],
      image: '/assets/copper.jpg',
      color: '#B87333'
    },
    {
      id: '4',
      name: 'Brass',
      slug: 'brass',
      description: 'Versatile brass alloys for decorative and functional applications.',
      features: [
        'Good malleability',
        'Excellent machinability',
        'Corrosion resistant',
        'Attractive appearance',
        'Cost-efficient'
      ],
      applications: [
        'Fittings and valves',
        'Decorative items',
        'Musical instruments',
        'Ammunition components',
        'Plumbing fixtures'
      ],
      image: '/assets/brass.jpg',
      color: '#CD7F32'
    },
    {
      id: '5',
      name: 'Mild Steel',
      slug: 'mild-steel',
      description: 'Reliable mild steel products for structural and general engineering applications.',
      features: [
        'High tensile strength',
        'Good ductility',
        'Weldable',
        'Machinable',
        'Economical'
      ],
      applications: [
        'Structural frameworks',
        'Automotive parts',
        'Machinery components',
        'Construction materials',
        'Fasteners'
      ],
      image: '/assets/mild-steel.jpg',
      color: '#778899'
    },
    {
      id: '6',
      name: 'Galvanize',
      slug: 'galvanize',
      description: 'Galvanized steel with protective zinc coating for enhanced corrosion resistance.',
      features: [
        'Superior corrosion resistance',
        'Long-lasting protection',
        'Low maintenance',
        'Cost-effective',
        'Durable in harsh environments'
      ],
      applications: [
        'Outdoor structures',
        'Bridges and highways',
        'Utility poles',
        'Agricultural equipment',
        'Marine applications'
      ],
      image: '/assets/galvanize.jpg',
      color: '#A9A9A9'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products;
  }
}
