import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService, UserDto } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('usernameRef') usernameRef!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordRef') passwordRef!: ElementRef<HTMLInputElement>;

  constructor(private authService: AuthService){}

  onSubmit(){
    const userRequest: UserDto = {
      username: this.usernameRef.nativeElement.value,
      password: this.passwordRef.nativeElement.value
    }
    this.authService.login(userRequest).subscribe({
      next: (response) => {
        console.log("login OK", response)
      },
      error: (error) => {
        console.log("login failed", error)
      }
    });
  }
  onRegister()
  {}
}
