import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';

import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let cookieSpy: jasmine.SpyObj<CookieService>;
  let authService: AuthService;

  beforeEach(async () => {
    TestBed.resetTestingModule();

    spyOn(window, 'alert');

    cookieSpy = jasmine.createSpyObj('CookieService', ['set', 'get', 'deleteAll']);
    cookieSpy.get.and.returnValue('');

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SigninComponent, ReactiveFormsModule],
      providers: [
        AuthService,
        { provide: CookieService, useValue: cookieSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { queryParamMap: { get: () => null } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    const states: boolean[] = [];
    authService.getAuthState().subscribe((v) => states.push(v));

    component.signinForm.controls['email'].setValue('starweaver@elderlands.com');
    component.signinForm.controls['password'].setValue('Dragonbane88');
    component.signin();

    const setArgs = cookieSpy.set.calls.mostRecent().args as unknown[];
    expect(setArgs[0]).toBe('session_user');
    expect(setArgs[1]).toBe('starweaver@elderlands.com');
    expect(setArgs[2]).toBe(1);
    expect(states[states.length - 1]).toBe(true);
  });

  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    const states: boolean[] = [];
    authService.getAuthState().subscribe((v) => states.push(v));

    component.signinForm.controls['email'].setValue('starweaver@elderlands.com');
    component.signinForm.controls['password'].setValue('WrongPass99');
    component.signin();

    expect(cookieSpy.set).not.toHaveBeenCalled();
    expect(states.every((s) => s === false)).toBe(true);
  });

  it('should call signin method on form submission', () => {
    const signInSpy = spyOn((component as any).authService, 'signin').and.returnValue(true);
    component.signinForm.controls['email'].setValue('starweaver@elderlands.com');
    component.signinForm.controls['password'].setValue('Dragonbane88');
    component.signin();
    expect(signInSpy).toHaveBeenCalledWith('starweaver@elderlands.com', 'Dragonbane88');
  });
});
