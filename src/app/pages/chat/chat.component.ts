import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  title = 'Sorna-frontend';
  isSidebarCollapsed: boolean = true; // Estado inicial (colapsado)

  onToggleMenu() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed; // Cambia el estado
    console.log('Toggle del menú lateral');
    // Aquí puedes mostrar u ocultar el sidebar
  }

  onOpenSettings() {
    console.log('Abrir configuración de usuario');
    // Aquí puedes mostrar un modal o un panel de ajustes
  }
}

