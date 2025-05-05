import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-auth-modal',
  standalone: false,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {

  email: string = '';
  password: string = '';


  onSubmit() {
    console.log('Login con:', this.email, this.password);
    // Aquí conectarás con AuthService más adelante
  }
  onRegister() {
    console.log('Usuario registrado con:', this.email, this.password);
    }
}
