import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of characters', () => {
    const items = fixture.nativeElement.querySelectorAll('.character-list-item');
    expect(items.length).toBe(component.characters.length);
    expect(items.length).toBeGreaterThan(0);
    const first = component.characters[0];
    expect(items[0].textContent).toContain(first.name);
    expect(items[0].textContent).toContain(first.faction);
  });
});
