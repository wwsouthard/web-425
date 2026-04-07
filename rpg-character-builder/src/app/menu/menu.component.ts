import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="site-nav" aria-label="Main">
      <a routerLink="/">Home</a>
      <a routerLink="/players">Players</a>
      <a routerLink="/signin">Sign in</a>
      <a routerLink="/create-character">Create character</a>
      <a routerLink="/create-guild">Create guild</a>
      <a routerLink="/character-faction">Character faction</a>
    </nav>
  `,
  styles: `
    .site-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 1.25rem;
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 0.9rem;
    }

    .site-nav a {
      color: #c4b8dc;
      text-decoration: none;
      padding: 0.35rem 0.5rem;
      border-radius: 6px;
      transition: color 0.2s, background 0.2s;
    }

    .site-nav a:hover {
      color: #fff;
      background: rgba(140, 100, 220, 0.2);
    }
  `,
})
export class MenuComponent {}
