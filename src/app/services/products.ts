import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  bannerImage: string;
  overviewImage: string;
  overviewText: string;
  variants: ProductVariant[];
  salientFeatures: string[];
  color: string;
}

export interface ProductVariant {
  title: string;
  description: string;
  image: string;
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
      image: '/products/p-ss-main.png',
      bannerImage: '/products/p-ss-banner.png',
      overviewImage: '/products/p-ss-main.png',
      overviewText: 'Umiya Steel and Impex offers premium stainless steel, renowned for its exceptional resistance to rust, staining, and corrosion. Perfect for use in environments requiring stringent hygiene and cleanliness standards, our stainless steel products are extensively used in the medical, food processing, and construction industries.',
      variants: [
        {
          title: 'Stainless Steel Pipes',
          description: 'Our stainless steel pipes are known for their exceptional durability, corrosion resistance, and strength. Ideal for a wide range of applications including plumbing, construction, and industrial use, these pipes ensure reliable performance even in the most demanding environments.',
          image: '/products/p-ss-1.png'
        },
        {
          title: 'Stainless Steel Rods',
          description: 'We provide high-quality stainless steel rods and flat bars, known for their excellent mechanical properties and resistance to corrosion. These products are ideal for construction, machining, and fabrication, ensuring durability and performance in every application.',
          image: '/products/p-ss-2.png'
        },
        {
          title: 'Stainless Steel Sheet',
          description: 'Umiya Steel and Impex offers premium stainless steel sheets that combine excellent corrosion resistance with high formability. Perfect for use in manufacturing, construction, and decorative applications, our sheets are available in various sizes and finishes to meet your specific requirements.',
          image: '/products/p-ss-3.png'
        },
        {
          title: 'Stainless Steel Coil',
          description: 'Our stainless steel coils are highly versatile, offering superior strength and resistance to corrosion and oxidation. Suitable for a variety of applications such as manufacturing, automotive, and aerospace, these coils can be easily processed to fit your precise needs.',
          image: '/products/p-ss-4.png'
        }
      ],
      salientFeatures: [
        'Corrosion Resistance',
        'Recyclable',
        'Heat Resistant',
        'Aesthetic Appeal',
        'Hygienic Surface',
        'Low maintenance'
      ],
      color: '#C0C0C0'
    },
    {
      id: '2',
      name: 'Aluminum',
      slug: 'aluminum',
      description: 'Our high-quality aluminum products are known for their excellent strength-to-weight ratio, corrosion resistance, and versatility.',
      features: [
        'Excellent strength-to-weight ratio',
        'Corrosion resistance',
        'Versatile for many industries',
        'Durable performance',
        'Reliable quality'
      ],
      applications: [
        'Construction projects',
        'Automotive manufacturing',
        'Aerospace components',
        'Industrial fabrication',
        'Transportation systems'
      ],
      image: '/products/p-aluminum-main.png',
      bannerImage: '/products/p-aluminum-banner.png',
      overviewImage: '/products/p-aluminum-main.png',
      overviewText: 'Our high-quality aluminum products are known for their excellent strength-to-weight ratio, corrosion resistance, and versatility. Ideal for a wide range of applications including construction, automotive, and aerospace industries, aluminum is a go-to choice for durability and performance.',
      variants: [
        {
          title: 'Aluminum Sheet',
          description: 'Umiya Steel and Impex offers high-quality aluminum sheets known for their exceptional strength-to-weight ratio and versatility. Perfect for use in automotive, aerospace, and construction industries, our aluminum sheets are available in various sizes and thicknesses to meet your specific needs.',
          image: '/products/p-aluminum-1.png'
        },
        {
          title: 'Aluminum Rods/Flat Bars',
          description: 'We supply premium aluminum rods and flat bars, recognized for their excellent machinability, strength, and corrosion resistance. Ideal for construction, fabrication, and machining projects, these products ensure reliability and efficiency in various industrial applications.',
          image: '/products/p-aluminum-2.png'
        },
        {
          title: 'Aluminum Pipes',
          description: 'Our aluminum pipes are lightweight yet strong, offering excellent resistance to corrosion and ease of installation. These pipes are ideal for applications in industries such as construction, transportation, and marine, where durability and performance are essential.',
          image: '/products/p-aluminum-3.png'
        },
        {
          title: 'Aluminum Coil',
          description: 'Our aluminum coils provide superior flexibility and durability, making them suitable for a wide range of applications including manufacturing, electrical, and HVAC systems. These coils are designed to meet the highest standards of quality and performance.',
          image: '/products/p-aluminum-4.png'
        }
      ],
      salientFeatures: [
        'Lightweight',
        'Corrosion Resistant',
        'High Strength',
        'Thermal Conductivity',
        'Recyclable',
        'Non-Magnetic'
      ],
      color: '#D3D3D3'
    },
    {
      id: '3',
      name: 'Copper',
      slug: 'copper',
      description: 'Our copper products are prized for their superior electrical and thermal conductivity, making them essential in electrical wiring, plumbing, and industrial machinery.',
      features: [
        'Superior electrical conductivity',
        'High thermal efficiency',
        'Excellent workability',
        'Durable performance',
        'Meets industry standards'
      ],
      applications: [
        'Electrical wiring',
        'Plumbing systems',
        'Industrial machinery',
        'Heating and cooling',
        'Construction projects'
      ],
      image: '/products/p-copper-main.png',
      bannerImage: '/products/p-copper-banner.png',
      overviewImage: '/products/p-copper-main.png',
      overviewText: "Our copper products are prized for their superior electrical and thermal conductivity, making them essential in electrical wiring, plumbing, and industrial machinery. Copper's excellent workability and durability ensure it meets the highest industry standards.",
      variants: [
        {
          title: 'Copper Pipe',
          description: 'Our copper pipes are known for their superior thermal and electrical conductivity, making them ideal for plumbing, heating, and cooling systems. They offer excellent corrosion resistance and durability, ensuring reliable performance in various applications.',
          image: '/products/p-copper-1.png'
        },
        {
          title: 'Copper Fittings',
          description: 'Our copper fittings are precision-engineered for use in plumbing and HVAC systems, ensuring leak-free connections and long-term reliability. They are resistant to corrosion and provide excellent thermal conductivity, making them an ideal choice for both residential and commercial applications.',
          image: '/products/p-copper-2.png'
        },
        {
          title: 'Copper Sheet',
          description: 'Umiya Steel and Impex offers high-quality copper sheets, known for their excellent malleability and conductivity. These sheets are perfect for electrical applications, roofing, and decorative purposes, providing versatility and top-notch performance in various projects.',
          image: '/products/p-copper-3.png'
        },
        {
          title: 'Copper PVC Coated Tubes',
          description: 'Our copper PVC coated tubes combine the superior properties of copper with the protective benefits of PVC coating. These tubes are used in various applications including refrigeration, air conditioning, and plumbing, where protection against corrosion and abrasion is essential.',
          image: '/products/p-copper-4.png'
        },
        {
          title: 'Copper Rods/Flat Bars',
          description: 'We supply premium copper rods and flat bars, celebrated for their excellent machinability and high conductivity. These products are perfect for electrical grounding, construction, and industrial applications, offering outstanding performance and durability.',
          image: '/products/p-copper-5.png'
        }
      ],
      salientFeatures: [
        'Excellent Conductivity',
        'Corrosion Resistant',
        'High Ductility',
        'Thermal Efficiency',
        'Recyclable Material',
        'Antimicrobial Properties'
      ],
      color: '#B87333'
    },
    {
      id: '4',
      name: 'Brass',
      slug: 'brass',
      description: 'We provide top-grade brass, an alloy known for its acoustic properties, malleability, and resistance to corrosion.',
      features: [
        'Acoustic properties',
        'High malleability',
        'Corrosion resistance',
        'Decorative appeal',
        'Reliable strength'
      ],
      applications: [
        'Decorative applications',
        'Musical instruments',
        'Plumbing fixtures',
        'Electrical components',
        'Machining projects'
      ],
      image: '/products/p-brass-main.png',
      bannerImage: '/products/p-brass-banner.png',
      overviewImage: '/products/p-brass-main.png',
      overviewText: 'We provide top-grade brass, an alloy known for its acoustic properties, malleability, and resistance to corrosion. Brass is widely used in decorative applications, musical instruments, and plumbing fixtures, offering both functionality and aesthetic appeal.',
      variants: [
        {
          title: 'Brass Rods/Flat Bars',
          description: 'We supply premium brass rods and flat bars that are known for their excellent machinability and resistance to corrosion. These products are ideal for use in electrical, plumbing, and machining applications, offering strength, durability, and ease of fabrication.',
          image: '/products/p-brass-1.png'
        },
        {
          title: 'Brass Pipe',
          description: 'Our brass pipes are known for their excellent thermal conductivity, corrosion resistance, and machinability. They are widely used in plumbing, industrial, and decorative applications due to their durability and aesthetic appeal.',
          image: '/products/p-brass-2.png'
        },
        {
          title: 'Brass Sheet',
          description: 'Umiya Steel and Impex offers high-quality brass sheets that are prized for their acoustic properties and decorative appeal. These sheets are used in architectural design, musical instruments, and manufacturing applications where corrosion resistance and formability are essential.',
          image: '/products/p-brass-3.png'
        }
      ],
      salientFeatures: [
        'Corrosion Resistant',
        'High Malleability',
        'Aesthetic Appeal',
        'Good Conductivity',
        'Durable Alloy',
        'Easily Machinable'
      ],
      color: '#CD7F32'
    },
    {
      id: '5',
      name: 'Mild Steel',
      slug: 'mild-steel',
      description: 'Umiya Steel and Impex supplies mild steel, valued for its excellent weldability, machinability, and cost-effectiveness.',
      features: [
        'Excellent weldability',
        'Machinable material',
        'Cost-effective',
        'Reliable strength',
        'Versatile usage'
      ],
      applications: [
        'Structural frameworks',
        'Pipelines',
        'Manufacturing',
        'Construction',
        'Industrial fabrication'
      ],
      image: '/products/p-mildsteel-main.png',
      bannerImage: '/products/p-mildsteel-banner.png',
      overviewImage: '/products/p-mildsteel-main.png',
      overviewText: 'Umiya Steel and Impex supplies mild steel, valued for its excellent weldability, machinability, and cost-effectiveness. Mild steel is versatile and is utilized in structural frameworks, pipelines, and manufacturing, providing reliable performance across various sectors.',
      variants: [
        {
          title: 'Mild Steel Sheet',
          description: 'Umiya Steel and Impex offers high-quality mild steel sheets that are versatile and easy to work with. These sheets are used in automotive, construction, and manufacturing industries for their strength, formability, and cost-effectiveness.',
          image: '/products/p-mildsteel-1.png'
        },
        {
          title: 'Mild Steel Pipe',
          description: 'Our mild steel pipes are known for their strength, durability, and affordability. They are widely used in construction, infrastructure, and industrial applications due to their excellent weldability and corrosion resistance.',
          image: '/products/p-mildsteel-2.png'
        },
        {
          title: 'Mild Steel Coils/Slitting Coils',
          description: 'Our mild steel coils, also known as slitting coils, are designed for high-volume production and precision cutting. They are used in various industries including automotive, construction, and appliance manufacturing for their strength, consistency, and ease of processing.',
          image: '/products/p-mildsteel-3.png'
        },
        {
          title: 'Mild Steel Rods/Flat Bars',
          description: 'We supply premium mild steel rods and flat bars that are known for their excellent machinability and weldability. These products are used in construction, fabrication, and industrial applications where strength and versatility are critical.',
          image: '/products/p-mildsteel-4.png'
        }
      ],
      salientFeatures: [
        'High Strength',
        'Durable Material',
        'Versatile Usage',
        'Easily Formable',
        'Tough and Resilient',
        'Readily Available'
      ],
      color: '#778899'
    },
    {
      id: '6',
      name: 'Galvanize',
      slug: 'galvanize',
      description: 'Our galvanized steel is coated with a layer of zinc to provide enhanced corrosion resistance, making it ideal for outdoor and industrial applications.',
      features: [
        'Enhanced corrosion resistance',
        'Durable zinc coating',
        'Low maintenance',
        'Weather-ready performance',
        'Long lifespan'
      ],
      applications: [
        'Construction projects',
        'Automotive bodies',
        'Infrastructure projects',
        'Outdoor structures',
        'Industrial fabrication'
      ],
      image: '/products/p-galvanize-main.png',
      bannerImage: '/products/p-galvanize-banner.png',
      overviewImage: '/products/p-galvanize-main.png',
      overviewText: 'Our galvanized steel is coated with a layer of zinc to provide enhanced corrosion resistance, making it ideal for outdoor and industrial applications. It is commonly used in construction, automotive bodies, and infrastructure projects where durability and longevity are critical.',
      variants: [
        {
          title: 'Galvanize Sheet',
          description: 'Umiya Steel and Impex offers high-quality galvanized sheets that are coated with zinc to prevent rust and corrosion. These sheets are used in roofing, fencing, and industrial applications where protection against the elements is essential.',
          image: '/products/p-galvanize-1.png'
        },
        {
          title: 'Galvanize Pipe',
          description: 'Our galvanized pipes are coated with a layer of zinc, offering excellent corrosion resistance and durability. They are commonly used in plumbing, construction, and agricultural applications due to their long lifespan and ability to withstand harsh conditions.',
          image: '/products/p-galvanize-2.png'
        },
        {
          title: 'Galvanized Coils/Slitting Coils',
          description: 'Our galvanized coils, also known as slitting coils, are manufactured with a zinc coating for added protection against corrosion. They are used in manufacturing processes such as automotive components, HVAC systems, and construction materials.',
          image: '/products/p-galvanize-3.png'
        },
        {
          title: 'Galvanized Rods/Flat Bars',
          description: 'We supply premium galvanized rods and flat bars that are coated with zinc for increased corrosion resistance. These products are used in construction, manufacturing, and fabrication where strength, durability, and protection from the elements are crucial.',
          image: '/products/p-galvanize-4.png'
        }
      ],
      salientFeatures: [
        'Durable Coating',
        'Low Maintenance',
        'Weather Resistant',
        'Long Lifespan',
        'Enhanced Strength',
        'Rust Protection'
      ],
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
