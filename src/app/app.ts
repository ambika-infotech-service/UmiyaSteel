import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Footer } from './layout/footer/footer';
import { Navigation } from './layout/navigation/navigation';
import { SeoConfig, SeoService } from './services/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  constructor() {
    this.registerGlobalSchemas();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        let activeRoute = this.activatedRoute;

        while (activeRoute.firstChild) {
          activeRoute = activeRoute.firstChild;
        }

        const seoData = activeRoute.snapshot.data['seo'] as SeoConfig | undefined;
        if (seoData) {
          this.seo.update(seoData);
        }
      });
  }

  private registerGlobalSchemas(): void {
    this.seo.upsertJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Umiya Steel and Impex',
      url: 'https://umiyasteel.ambikainfotech.online',
      logo: 'https://umiyasteel.ambikainfotech.online/favicon.ico',
      email: 'info@umiyasteelandimpex.com',
      telephone: '+91 1234567890',
      sameAs: []
    });

    this.seo.upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Umiya Steel and Impex',
      url: 'https://umiyasteel.ambikainfotech.online'
    });
  }
}
