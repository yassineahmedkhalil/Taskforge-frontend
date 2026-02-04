import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthTogglePageComponent } from './auth/auth-toggle-page/auth-toggle-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthTogglePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taskforge-frontend';
}
