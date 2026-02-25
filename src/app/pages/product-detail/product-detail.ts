import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

  slug = this.route.snapshot.paramMap.get('slug') || '';
  product = computed<Product | undefined>(() => {
    return this.productsService.getProduct(this.slug);
  });
}
