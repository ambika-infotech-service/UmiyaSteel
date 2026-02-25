import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductsService, Product } from '../../services/products';

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

  slug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug') || '')),
    { initialValue: '' }
  );

  product = computed<Product | undefined>(() => {
    const currentSlug = this.slug();
    return this.productsService.getProduct(currentSlug);
  });
}
