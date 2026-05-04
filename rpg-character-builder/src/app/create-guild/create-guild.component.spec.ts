import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add a guild when the form is invalid', () => {
    component.onSubmit();

    expect(component.guilds.length).toBe(0);
    expect(component.guildForm.invalid).toBe(true);
  });

  it('should add a guild with the submitted form values when the form is valid', () => {
    spyOn(component, 'generateGuildId').and.returnValue(501);

    component.guildForm.patchValue({
      guildName: 'Dawn Wardens',
      description: 'Late-night mythic progression.',
      type: 'Competitive',
      acceptTerms: true,
      notificationPreference: 'Email',
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0]).toEqual({
      id: 501,
      guildName: 'Dawn Wardens',
      description: 'Late-night mythic progression.',
      type: 'Competitive',
      acceptTerms: true,
      notificationPreference: 'Email',
    });
  });

  it('should not submit when accept terms is unchecked even if other fields are filled', () => {
    component.guildForm.patchValue({
      guildName: 'Silver Coin',
      description: 'Trading and lore.',
      type: 'Social',
      acceptTerms: false,
      notificationPreference: 'In-App',
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(0);
    expect(component.guildForm.get('acceptTerms')?.valid).toBe(false);
  });
});
