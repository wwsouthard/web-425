import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm: FormGroup;

  readonly authService: AuthService;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    authService: AuthService
  ) {
    this.authService = authService;
    this.signinForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
        ])
      ]
    });
  }

  signin(): void {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;
    if (this.authService.signin(email, password)) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
    } else {
      alert('We could not sign you in with those credentials. Please try again.');
    }
  }
}
