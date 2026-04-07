import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

import { routes } from '../app.routes';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have correct route for PlayersComponent', () => {
    const playersAnchor = fixture.debugElement
      .queryAll(By.directive(RouterLink))
      .map((de) => de.nativeElement as HTMLAnchorElement)
      .find((a) => a.textContent?.trim() === 'Players');
    expect(playersAnchor).withContext('Players link should exist').toBeTruthy();
    expect(playersAnchor?.getAttribute('href')).toBe('/players');
  });
});
