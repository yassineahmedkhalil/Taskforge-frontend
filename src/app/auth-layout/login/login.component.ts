import { Component, inject } from '@angular/core';
import { AuthService, UserDto } from '../services/auth.service';
import { 
  NonNullableFormBuilder, 
  Validators,  
  ReactiveFormsModule 
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  private formBuilder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login(){
    if(this.loginForm.invalid)
    {
      this.loginForm.markAsTouched();
      return;
    }
    const userRequest: UserDto = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.login(userRequest).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
      }
    });
  }
}
