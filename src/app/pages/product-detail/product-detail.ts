import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Product, ProductsService } from '../../services/products';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-product-detail',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private seo = inject(SeoService);

  slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug') || '')),
    { initialValue: '' }
  );

  product = computed<Product | undefined>(() => {
    const currentSlug = this.slug();
    return this.productsService.getProduct(currentSlug);
  });

  constructor() {
    effect(() => {
      const currentSlug = this.slug();
      if (!currentSlug) {
        return;
      }

      const currentProduct = this.product();
      if (currentProduct) {
        this.seo.update({
          title: `${currentProduct.name} | Umiya Steel and Impex`,
          description: currentProduct.description,
          keywords: `${currentProduct.name}, metal products, industrial metals, Umiya Steel`,
          image: currentProduct.image,
          path: `/products/${currentProduct.slug}`,
          type: 'product'
        });
        return;
      }

      this.seo.update({
        title: 'Product Not Found | Umiya Steel and Impex',
        description: 'The requested product was not found. Browse our available metal products.',
        path: `/products/${currentSlug}`,
        noindex: true
      });
    });
  }
}
