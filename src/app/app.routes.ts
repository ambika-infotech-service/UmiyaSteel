import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'products', component: Products },
  { path: 'products/:slug', component: ProductDetail },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: '' }
];
