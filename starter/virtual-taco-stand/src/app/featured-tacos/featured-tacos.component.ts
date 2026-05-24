export interface FeaturedTaco {
  name: string;
  description: string;
  price: number;
  featuredLabel: string;
  isChefsPick?: boolean;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-tacos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Featured Tacos</h1>
      <p>Try our hand-picked favorites, each with its own signature flavor and flair.</p>

      <ul class="featured-tacos-list">
        @for (taco of featuredTacos; track taco.name) {
          <li class="featured-taco">
            <span class="featured-label">{{ taco.featuredLabel }}</span>
            <h3>{{ taco.name }}</h3>
            <p>{{ taco.description }}</p>
            <p class="price">{{ taco.price | currency }}</p>
          </li>
        }
      </ul>

      @if (chefsPick) {
        <section class="chefs-pick">
          <h2>Chef's Pick</h2>
          <span class="featured-label">{{ chefsPick.featuredLabel }}</span>
          <h3>{{ chefsPick.name }}</h3>
          <p>{{ chefsPick.description }}</p>
          <p class="price">{{ chefsPick.price | currency }}</p>
        </section>
      }
    </div>
  `,
  styles: [
    `
      .featured-tacos-list {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        gap: 20px;
      }

      .featured-taco {
        flex: 0 1 calc(50% - 20px);
        padding: 20px;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .featured-label {
        display: inline-block;
        padding: 4px 10px;
        margin-bottom: 8px;
        font-size: 0.85rem;
        font-weight: bold;
        background-color: #f4a261;
        color: #fff;
        border-radius: 4px;
      }

      .price {
        font-weight: bold;
      }

      .chefs-pick {
        margin-top: 30px;
        padding: 24px;
        border: 2px solid #e76f51;
        background-color: #fff8f0;
        border-radius: 8px;
      }

      .chefs-pick h2 {
        margin-top: 0;
        color: #e76f51;
      }
    `
  ]
})
export class FeaturedTacosComponent {
  featuredTacos: FeaturedTaco[];
  chefsPick: FeaturedTaco | undefined;

  constructor() {
    this.featuredTacos = [
      {
        name: 'Al Pastor Taco',
        description: 'Marinated pork with pineapple, cilantro, and onions on a corn tortilla.',
        price: 3.25,
        featuredLabel: 'Popular'
      },
      {
        name: 'Queso Birria Taco',
        description: 'Cheesy birria with cilantro, onions, and consomé for dipping.',
        price: 3.50,
        featuredLabel: 'New',
        isChefsPick: true
      },
      {
        name: 'Chorizo Taco',
        description: 'Spicy sausage with onions and cilantro on a corn tortilla.',
        price: 3.25,
        featuredLabel: 'Spicy'
      },
      {
        name: 'Fish Taco',
        description: 'Battered fish with cabbage slaw and creamy sauce on a flour tortilla.',
        price: 3.25,
        featuredLabel: 'Popular'
      }
    ];

    this.chefsPick = this.featuredTacos.find((taco) => taco.isChefsPick);
  }
}
