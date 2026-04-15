import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Gender = 'Male' | 'Female' | 'Other';
type CharacterClass = 'Warrior' | 'Mage' | 'Rogue';

export interface Character {
  name: string;
  gender: Gender;
  class: CharacterClass;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="players-page">
      <h1 class="page-title">Player roster</h1>
      <p class="page-lead">Ten pre-made heroes—name, path, faction, and a story hook.</p>
      <p class="cross-nav">
        <a routerLink="/create-character" class="text-link">Create a new character</a>
      </p>

      <div class="character-grid" role="list">
        @for (c of characters; track c.name) {
          <article class="character-card character-list-item" role="listitem">
            <h2 class="card-name">{{ c.name }}</h2>
            <dl class="card-meta">
              <div>
                <dt>Gender</dt>
                <dd>{{ c.gender }}</dd>
              </div>
              <div>
                <dt>Class</dt>
                <dd>{{ c.class }}</dd>
              </div>
              <div>
                <dt>Faction</dt>
                <dd>{{ c.faction }}</dd>
              </div>
              <div>
                <dt>Starting location</dt>
                <dd>{{ c.startingLocation }}</dd>
              </div>
            </dl>
            <p class="fun-fact"><span class="label">Fun fact</span> {{ c.funFact }}</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .players-page {
      font-family: 'DM Sans', system-ui, sans-serif;
      color: #e8e4f0;
    }

    .page-title {
      font-family: 'Cinzel', Georgia, serif;
      font-size: clamp(1.5rem, 4vw, 2rem);
      letter-spacing: 0.04em;
      margin: 0 0 0.35rem;
      color: #f0e8ff;
    }

    .page-lead {
      margin: 0 0 0.75rem;
      color: #a898c4;
      font-size: 0.95rem;
      max-width: 42rem;
    }

    .cross-nav {
      margin: 0 0 1.75rem;
      font-size: 0.9rem;
    }

    .text-link {
      color: #c4a8f0;
      text-decoration: none;
      border-bottom: 1px solid rgba(196, 168, 240, 0.35);
      transition: color 0.2s, border-color 0.2s;
    }

    .text-link:hover {
      color: #fff;
      border-bottom-color: rgba(255, 255, 255, 0.45);
    }

    .character-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    @media (max-width: 900px) {
      .character-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 560px) {
      .character-grid {
        grid-template-columns: 1fr;
      }
    }

    .character-card {
      background: rgba(20, 16, 40, 0.65);
      border: 1px solid rgba(192, 168, 255, 0.18);
      border-radius: 12px;
      padding: 1.1rem 1.15rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    }

    .card-name {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 1.15rem;
      margin: 0 0 0.85rem;
      color: #fff;
      border-bottom: 1px solid rgba(168, 130, 255, 0.25);
      padding-bottom: 0.5rem;
    }

    .card-meta {
      margin: 0;
      display: grid;
      gap: 0.5rem 1rem;
    }

    .card-meta > div {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.35rem 0.75rem;
      align-items: baseline;
    }

    .card-meta dt {
      margin: 0;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8b7aad;
    }

    .card-meta dd {
      margin: 0;
      font-size: 0.88rem;
      color: #ddd6ee;
    }

    .fun-fact {
      margin: 1rem 0 0;
      font-size: 0.82rem;
      line-height: 1.45;
      color: #c4b8dc;
    }

    .fun-fact .label {
      display: block;
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #a080e0;
      margin-bottom: 0.25rem;
    }
  `,
})
export class PlayersComponent {
  readonly characters: Character[] = [
    {
      name: 'Thorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.',
    },
    {
      name: 'Lyra Nightshade',
      gender: 'Female',
      class: 'Rogue',
      faction: 'Whisper Court',
      startingLocation: 'Veilport',
      funFact: 'She has never paid for a drink—only traded secrets.',
    },
    {
      name: 'Orin Ashveil',
      gender: 'Other',
      class: 'Mage',
      faction: 'Circle of Ember Sigils',
      startingLocation: 'Ashspire Observatory',
      funFact: 'Orin keeps a journal written in a language that does not exist yet.',
    },
    {
      name: 'Brakka Stonejaw',
      gender: 'Female',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Granite March',
      funFact: 'Her shield is older than the kingdom on her passport.',
    },
    {
      name: 'Caelum Brightthread',
      gender: 'Male',
      class: 'Mage',
      faction: 'Silverweft Conclave',
      startingLocation: 'Luminara',
      funFact: 'Caelum once turned rain upward for three heartbeats just to win a bet.',
    },
    {
      name: 'Mira Quickpocket',
      gender: 'Female',
      class: 'Rogue',
      faction: 'Whisper Court',
      startingLocation: 'Dockside Maze',
      funFact: 'She “borrowed” the mayor’s key before the election was announced.',
    },
    {
      name: 'Sage Hollow',
      gender: 'Other',
      class: 'Mage',
      faction: 'Rootbound Archive',
      startingLocation: 'Thornhollow',
      funFact: 'Sage speaks fluent squirrel and refuses to explain how.',
    },
    {
      name: 'Garrick Redmane',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Sunfall Legion',
      startingLocation: 'Emberfields',
      funFact: 'Garrick’s war cry once startled a statue into cracking.',
    },
    {
      name: 'Vex Shadowline',
      gender: 'Male',
      class: 'Rogue',
      faction: 'Whisper Court',
      startingLocation: 'Cathedral Rooftops',
      funFact: 'Vex has walked every gutter in the capital—twice.',
    },
    {
      name: 'Elara Frostbloom',
      gender: 'Female',
      class: 'Mage',
      faction: 'Silverweft Conclave',
      startingLocation: 'Glacier Steps',
      funFact: 'Her favorite spell is one that only makes flowers shiver.',
    },
  ];
}
