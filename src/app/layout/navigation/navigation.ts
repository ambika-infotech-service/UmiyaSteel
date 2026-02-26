import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
  isNavbarOpen = signal(false);
  isProductsOpen = signal(false);

  toggleNavbar() {
    this.isNavbarOpen.set(!this.isNavbarOpen());
    if (!this.isNavbarOpen()) {
      this.isProductsOpen.set(false);
    }
  }

  closeNavbar() {
    this.isNavbarOpen.set(false);
    this.isProductsOpen.set(false);
  }

  toggleProducts() {
    this.isProductsOpen.set(!this.isProductsOpen());
  }

  closeProducts() {
    this.isProductsOpen.set(false);
  }
}
