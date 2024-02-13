import { Component, html } from '@plumejs/core';
// as per https://github.com/vitejs/vite/pull/2148
import { HttpService } from './api';
import { ConfigService } from './config';
import styles from './styles/base.scss?inline';

@Component({
  selector: 'app-root',
  styles: styles,
  root: true,
  deps: [ConfigService, HttpService]
})
export class AppComponent {
  constructor(
    private configService: ConfigService,
    private http: HttpService
  ) {}

  mount() {
    this.http.get<Array<unknown>>('users').then((data) => {
      console.log(data);
    });
  }

  render() {
    return html`
      <main class="container center">
        <img src="./images/logo.jpg" />
        <h1>Welcome to PlumeJS</h1>
        <p>example env variable: ${this.configService.get<string>('PLUME_SAMPLE_ENV_VARIABLE')}</p>
        <p>Please check <a href="https://github.com/KiranMantha/plumejs">here</a> for documentation</p>
      </main>
    `;
  }
}
