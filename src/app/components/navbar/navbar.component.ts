import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() openSettings = new EventEmitter<void>();
}
