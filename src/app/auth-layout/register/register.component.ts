import { Component, inject } from '@angular/core';
import { AuthService, UserDto } from '../services/auth.service';
import { 
  FormsModule, 
  ReactiveFormsModule, 
  NonNullableFormBuilder, 
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ValidatorService } from '../../core/services/validator.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm = this.formBuilder.group(
    {
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        ValidatorService.passwordsMatch
      ],
    },
  );

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const userRequest: UserDto = {
      username: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    };
    this.authService.register(userRequest).subscribe({
      next: (response) => {
        console.log('regsitration OK', response);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.log('registration failed', error);
      },
    });
  }
}
