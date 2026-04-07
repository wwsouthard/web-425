import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MenuComponent],
  template: `
    <div class="app-shell">
      <header class="site-header">
        <a class="brand" routerLink="/">RPG Character Builder</a>
        <app-menu />
      </header>

      <main class="site-main">
        <router-outlet />
      </main>

      <footer class="site-footer">
        <nav class="footer-nav" aria-label="Footer">
          <a routerLink="/">Home</a>
          <a routerLink="/players">Players</a>
          <a routerLink="/signin">Sign in</a>
          <a routerLink="/create-character">Create character</a>
          <a routerLink="/create-guild">Create guild</a>
          <a routerLink="/character-faction">Character faction</a>
        </nav>
        <p class="footer-tagline">Forge legends. Track sheets. Tell better stories.</p>
      </footer>
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: radial-gradient(ellipse 120% 80% at 50% -20%, #2a1f4a 0%, #0f0c1a 45%, #08060f 100%);
      color: #e8e4f0;
    }

    .site-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem 2rem;
      padding: 1rem clamp(1rem, 4vw, 2.5rem);
      border-bottom: 1px solid rgba(192, 168, 255, 0.15);
      background: rgba(8, 6, 18, 0.85);
      backdrop-filter: blur(10px);
    }

    .brand {
      font-family: 'Cinzel', Georgia, serif;
      font-weight: 700;
      font-size: clamp(1.1rem, 2.5vw, 1.45rem);
      letter-spacing: 0.06em;
      text-decoration: none;
      color: #f0e8ff;
      text-shadow: 0 0 24px rgba(168, 130, 255, 0.35);
    }

    .brand:hover {
      color: #fff;
    }

    .site-main {
      flex: 1;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: clamp(1rem, 3vw, 2rem);
      box-sizing: border-box;
    }

    .site-footer {
      margin-top: auto;
      padding: 1.5rem clamp(1rem, 4vw, 2.5rem);
      border-top: 1px solid rgba(192, 168, 255, 0.12);
      background: rgba(5, 4, 12, 0.92);
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem 1.25rem;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 0.88rem;
    }

    .footer-nav a {
      color: #a898c4;
      text-decoration: none;
    }

    .footer-nav a:hover {
      color: #e0d4f8;
    }

    .footer-tagline {
      margin: 1rem 0 0;
      text-align: center;
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b5f88;
    }
  `
})
export class AppComponent {
  title = 'rpg-character-builder';
}
