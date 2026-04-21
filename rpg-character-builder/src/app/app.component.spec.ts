import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(routes),
        {
          provide: AuthService,
          useValue: {
            getAuthState: () => of(false),
            signout: (): void => {}
          }
        },
        {
          provide: CookieService,
          useValue: {
            get: (): string => ''
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rpg-character-builder' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rpg-character-builder');
  });

  it('should render the site brand', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.textContent).toContain('RPG Character Builder');
  });

  it('should have correct route for PlayersComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const playersAnchor = fixture.debugElement
      .queryAll(By.directive(RouterLink))
      .map((de) => de.nativeElement as HTMLAnchorElement)
      .find((a) => a.textContent?.trim() === 'Players');
    expect(playersAnchor).withContext("Player's link should exist in the menu").toBeTruthy();
    expect(playersAnchor?.getAttribute('href')).toBe('/players');
  });
});
