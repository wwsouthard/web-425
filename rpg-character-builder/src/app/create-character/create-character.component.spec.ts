import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    spyOn(Math, 'random').and.returnValues(0, 0.999999, 0.456);

    expect(component.generateCharacterId()).toBe(1);
    expect(component.generateCharacterId()).toBe(1000);

    const id = component.generateCharacterId();
    expect(id).toBe(457);
    expect(Number.isInteger(id)).toBe(true);
    expect(id % 1).toBe(0);
  });

  it('should add a character with correct customization', () => {
    component.model.name = 'Test Hero';
    component.model.gender = 'Female';
    component.model.class = 'Mage';
    spyOn(component, 'generateCharacterId').and.returnValue(42);

    component.onSubmit();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0]).toEqual({
      id: 42,
      name: 'Test Hero',
      gender: 'Female',
      class: 'Mage',
    });
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.model.name = 'Temp';
    component.model.gender = 'Other';
    component.model.class = 'Rogue';

    component.resetForm();

    expect(component.model.name).toBe('');
    expect(component.model.gender).toBe('Male');
    expect(component.model.class).toBe('Warrior');
  });
});
