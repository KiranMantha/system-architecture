import { Component, html, render } from '@plumejs/core';
// as per https://github.com/vitejs/vite/pull/2148
import { ConfigService, HttpService } from '@frontend/common';
import { Router } from '@plumejs/router';
// import { setupWorker } from 'msw/browser';
// import { mockHandlers } from './mocks';
import styles from './styles/base.scss?inline';

// setupWorker(...mockHandlers).start();

@Component({
  selector: 'app-root',
  styles: styles,
  root: true,
  deps: [ConfigService, HttpService, Router],
})
export class AppComponent {
  routes = [
    {
      path: '/',
      redirectTo: '/products',
    },
    {
      path: '/products',
      template: '<app-product-listing></app-product-listing>',
      templatePath: () => import('@frontend/product-listing'),
    },
    {
      path: '/cart',
      template: '<app-product-details></app-product-details>',
      templatePath: () => import('@frontend/product-details'),
    },
  ];

  constructor(
    private configService: ConfigService,
    private http: HttpService,
    private router: Router,
  ) {
    Router.registerRoutes({ routes: this.routes });
  }

  mount() {
    // this.http.get<Array<unknown>>('users').then((data) => {
    //   console.log(data);
    // });
  }

  navigate(e: Event, path: string) {
    e.preventDefault();
    this.router.navigateTo(path);
  }

  render() {
    return html`
      <main class="container center">
        <img src="./images/logo.jpg" />
        <h1>Welcome to PlumeJS</h1>
        <p>
          example env variable:
          ${this.configService.get<string>('PLUME_SAMPLE_ENV_VARIABLE')}
        </p>
        <p>
          Please check
          <a href="https://github.com/KiranMantha/plumejs">here</a> for
          documentation
        </p>
        <header class="layout sticky-header">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  onclick=${(e: Event) => this.navigate(e, '/products')}
                  >Products</a
                >
              </li>
              <li>
                <a href="#" onclick=${(e: Event) => this.navigate(e, '/cart')}
                  >Cart</a
                >
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <router-outlet></router-outlet>
        </div>
      </main>
    `;
  }
}

setTimeout(() => {
  render(document.getElementById('root'), html`<app-root></app-root>`);
}, 100);
