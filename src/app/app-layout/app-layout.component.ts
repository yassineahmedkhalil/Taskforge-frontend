import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from '../core/shared/components/header/header.component';

@Component({
  selector: 'app-app-layout',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css'
})
export class AppLayoutComponent {

}
