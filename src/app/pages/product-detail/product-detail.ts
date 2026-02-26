import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Product, ProductsService } from '../../services/products';

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
