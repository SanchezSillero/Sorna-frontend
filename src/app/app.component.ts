import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sorna-frontend';
  isSidebarCollapsed: boolean = true; 

  constructor(private authService: AuthService) {
    this.authService.checkSession(); 
  }

  onToggleMenu() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed; 
    console.log('Toggle del menú lateral');
    
  }

  onOpenSettings() {
    console.log('Abrir configuración de usuario');
   
  }
}