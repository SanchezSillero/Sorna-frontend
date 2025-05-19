import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() openSettings = new EventEmitter<void>();

  isLoggedIn = false; 
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((status) => {
      console.log('Navbar detecta login:', status);
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout();
  }
}
