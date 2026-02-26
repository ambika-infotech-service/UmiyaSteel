import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'products', component: Products },
  { path: 'products/:slug', component: ProductDetail },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: '' }
];
