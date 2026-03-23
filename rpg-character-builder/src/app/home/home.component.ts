import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <article class="home">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Your table. Your saga.</p>
          <h1>Build characters worth remembering</h1>
          <p class="lede">
            RPG Character Builder helps you shape heroes and antiheroes with clarity, color, and just enough crunch to satisfy
            rules enthusiasts—without burying the heart of your story.
          </p>
          <a class="cta" href="#">Start a character sheet</a>
        </div>
        <figure class="hero-figure">
          <img
            src="/assets/diceandgamepieces.png"
            alt="Dice and game pieces on a wooden table during a tabletop session"
          />
          <figcaption>Every roll is a beat in your campaign’s rhythm.</figcaption>
        </figure>
      </section>

      <section class="split">
        <figure>
          <img
            src="/assets/mistyfantasylandscape.png"
            alt="Misty fantasy landscape with mountains and ancient ruins"
          />
        </figure>
        <div class="split-text">
          <h2>Why detail matters at the table</h2>
          <p>
            Welcome to RPG Character Builder, a thoughtfully crafted home for players who love building heroes, villains, and
            everyone in between. Tabletop role-playing games thrive when characters feel lived-in: a paladin carries vows as
            heavy as her shield, a rogue remembers the alley where luck first turned, and a druid speaks for groves that never
            asked to be mapped. Our mission is to give you a single, organized place to capture those details so your group can
            stay immersed in the story instead of digging through scattered notes.
          </p>
          <p>
            When you sketch a backstory alongside stats, you invite richer improvisation. The referee can riff on your mentor’s
            name, your rival’s guild, or the scent of your character’s favorite tea because you wrote it down in a spot that is
            easy to find mid-session. That is the difference between a stat block and a persona your friends talk about long
            after the lights go out.
          </p>
        </div>
      </section>

      <section class="highlight">
        <div class="highlight-inner">
          <h2>Designed for long campaigns and one-shots alike</h2>
          <p>
            Whether you are planning a year-long epic or a single evening of chaos, the same principles apply: keep motivations
            visible, track relationships, and leave breadcrumbs for future plot threads. RPG Character Builder encourages you to
            record bonds, flaws, and ideals in plain language so newer players are not intimidated by jargon. Veterans can still
            tuck advanced options—fighting styles, spellbooks, inventory tags—right beside narrative hooks.
          </p>
          <p>
            We celebrate the messy creativity of role-playing. Maybe your bard fibs about royal lineage, or your engineer rigs a
            bridge out of borrowed rope and stubborn optimism. Those moments deserve space beside attack bonuses and saving
            throws. By pairing mechanical reminders with story beats, you reduce downtime at the table and give everyone more
            scenes that sparkle.
          </p>
        </div>
        <figure class="highlight-figure">
          <img
            src="/assets/characterbuildersheet.png"
            alt="Character builder worksheet with stats and notes"
          />
        </figure>
      </section>

      <section class="closing">
        <h2>Ready when your party gathers</h2>
        <p>
          Picture the next session’s opening: someone asks what your character notices first in the crowded market, and you have
          a ready answer because you imagined it during the week. That confidence comes from preparation that feels playful, not
          like homework. RPG Character Builder is built to reward curiosity—add a portrait idea, link a faction, jot a rumor—so
          when the dungeon master pivots, you can pivot with grace and a grin.
        </p>
        <p>
          Thank you for stopping by our landing page. We are excited to grow this space with tools that respect both the math and
          the magic of role-playing games. Gather your dice, warm up your voices, and let’s build characters who will stride into
          legend—or at least into the next room—with purpose, humor, and heart.
        </p>
      </section>
    </article>
  `,
  styles: `
    .home {
      color: #e6e0f2;
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      align-items: center;
      margin-bottom: 3rem;
    }

    @media (min-width: 900px) {
      .hero {
        grid-template-columns: 1fr 1.1fr;
      }
    }

    .eyebrow {
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #b8a8dc;
      margin: 0 0 0.75rem;
    }

    .hero h1 {
      font-family: 'Outfit', system-ui, sans-serif;
      font-weight: 600;
      font-size: clamp(2rem, 4.5vw, 2.85rem);
      line-height: 1.15;
      margin: 0 0 1rem;
      color: #faf8ff;
    }

    .lede {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 1.05rem;
      line-height: 1.75;
      margin: 0 0 1.5rem;
      color: #c9c0dd;
    }

    .cta {
      display: inline-block;
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      padding: 0.65rem 1.25rem;
      border-radius: 999px;
      background: linear-gradient(135deg, #7c5cbf 0%, #4a7fd4 100%);
      color: #fff;
      text-decoration: none;
      box-shadow: 0 8px 28px rgba(90, 70, 200, 0.35);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 36px rgba(90, 70, 200, 0.45);
    }

    .hero-figure {
      margin: 0;
    }

    .hero-figure img {
      width: 100%;
      height: auto;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
    }

    .hero-figure figcaption {
      font-family: 'Merriweather', Georgia, serif;
      font-style: italic;
      font-size: 0.9rem;
      color: #9a8fb8;
      margin-top: 0.65rem;
    }

    .split {
      display: grid;
      gap: 2rem;
      align-items: start;
      margin-bottom: 3rem;
    }

    @media (min-width: 800px) {
      .split {
        grid-template-columns: 1fr 1fr;
      }
    }

    .split figure {
      margin: 0;
    }

    .split img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .split-text h2 {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 1.5rem;
      margin: 0 0 1rem;
      color: #f2ecff;
    }

    .split-text p {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 0.98rem;
      line-height: 1.8;
      margin: 0 0 1rem;
      color: #cfc4e4;
    }

    .highlight {
      display: grid;
      gap: 2rem;
      padding: 2rem;
      margin-bottom: 3rem;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(180, 160, 255, 0.12);
    }

    @media (min-width: 850px) {
      .highlight {
        grid-template-columns: 1.2fr 1fr;
        align-items: center;
      }
    }

    .highlight-inner h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.35rem;
      margin: 0 0 1rem;
      color: #eae4fb;
    }

    .highlight-inner p {
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 0.95rem;
      line-height: 1.75;
      margin: 0 0 1rem;
      color: #c5badc;
    }

    .highlight-figure {
      margin: 0;
    }

    .highlight-figure img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }

    .closing h2 {
      font-family: 'Cinzel', Georgia, serif;
      font-size: 1.45rem;
      margin: 0 0 1rem;
    }

    .closing p {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 0.98rem;
      line-height: 1.85;
      margin: 0 0 1rem;
      color: #d3c8e8;
    }
  `
})
export class HomeComponent {}
