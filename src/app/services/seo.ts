import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export type JsonLdObject = Record<string, unknown>;

const SITE_URL = 'https://umiyasteel.ambikainfotech.online';
const DEFAULT_IMAGE = '/home/ic-steel.png';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(config: SeoConfig): void {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    const canonicalUrl = this.buildCanonicalUrl(config.path);
    const imageUrl = this.toAbsoluteUrl(config.image || DEFAULT_IMAGE);
    const robotsContent = config.noindex ? 'noindex, follow' : 'index, follow';

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'robots', content: robotsContent });

    this.setCanonicalLink(canonicalUrl);
  }

  upsertJsonLd(id: string, schema: JsonLdObject): void {
    const scriptId = this.getJsonLdScriptId(id);
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify(schema);
  }

  removeJsonLd(id: string): void {
    const script = this.document.getElementById(this.getJsonLdScriptId(id));
    script?.remove();
  }

  private buildCanonicalUrl(path?: string): string {
    const pathname = path || this.document.location.pathname;
    const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return new URL(normalizedPath, SITE_URL).toString();
  }

  private toAbsoluteUrl(url: string): string {
    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    const normalized = url.startsWith('/') ? url : `/${url}`;
    return new URL(normalized, SITE_URL).toString();
  }

  private setCanonicalLink(url: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private getJsonLdScriptId(id: string): string {
    return `jsonld-${id}`;
  }
}
