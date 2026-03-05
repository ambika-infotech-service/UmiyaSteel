import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      seo: {
        title: 'Umiya Steel and Impex | Metal Supplier in India',
        description: 'Trusted supplier of stainless steel, aluminum, copper, brass, mild steel, and galvanized products across India.',
        keywords: 'Umiya Steel, metal supplier, stainless steel supplier, aluminum supplier, copper supplier, India'
      }
    }
  },
  {
    path: 'about-us',
    component: AboutUs,
    data: {
      seo: {
        title: 'About Us | Umiya Steel and Impex',
        description: 'Learn about Umiya Steel and Impex, our story, mission, and commitment to quality metal supply solutions.',
        keywords: 'about Umiya Steel, metal industry experience, steel supplier company profile'
      }
    }
  },
  {
    path: 'products',
    component: Products,
    data: {
      seo: {
        title: 'Metal Products | Umiya Steel and Impex',
        description: 'Explore stainless steel, aluminum, copper, brass, mild steel, and galvanized metal products for industrial and commercial use.',
        keywords: 'metal products, stainless steel products, aluminum products, copper products, galvanized steel'
      }
    }
  },
  {
    path: 'products/:slug',
    component: ProductDetail,
    data: {
      seo: {
        title: 'Product Details | Umiya Steel and Impex',
        description: 'Detailed specifications and applications for premium metal products from Umiya Steel and Impex.'
      }
    }
  },
  {
    path: 'contact-us',
    component: ContactUs,
    data: {
      seo: {
        title: 'Contact Us | Umiya Steel and Impex',
        description: 'Contact Umiya Steel and Impex for pricing, quotes, and product inquiries for all major metal categories.',
        keywords: 'contact Umiya Steel, steel quote, metal supplier contact, industrial metals inquiry'
      }
    }
  },
  { path: '**', redirectTo: '' }
];
