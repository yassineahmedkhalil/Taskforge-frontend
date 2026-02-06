import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService, UserDto } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild('usernameRef') usernameRef!: ElementRef<HTMLInputElement>;
  @ViewChild('emailRef') emailRef!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordRef') passwordRef!: ElementRef<HTMLInputElement>;
  @ViewChild('confirmPasswordRef') confirmPasswordRef!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService) {}
  onSubmit() {
    const userRequest: UserDto = {
      username: this.usernameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      password: this.passwordRef.nativeElement.value
    }
    this.authService.register(userRequest).subscribe({
      next: (response) => {
        console.log("regsitration OK", response)
      },
      error: (error) => {
        console.log("registration failed", error);
      }
    })
  }
}
