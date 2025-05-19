import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-modal',
  standalone: false,
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {
  
  username: string = '';
  password: string = '';
  loginError: string = '';

 
  registerEmail: string = '';
  registerUsername: string = '';
  registerPassword: string = '';
  registerPassword2: string = '';
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loginError = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
      
        
        this.router.navigate(['/chat']);
        this.closeModal('authModal');
        console.log('Login exitoso', res);
      },
      error: (err) => {
        this.loginError = 'Usuario o contraseña incorrectos';
      }
    });
  }

  onRegister() {
    if (this.registerPassword !== this.registerPassword2) {
      this.registerError = 'Las contraseñas no coinciden';
      return;
    }
    this.registerError = '';
    this.authService.register(this.registerEmail, this.registerUsername, this.registerPassword).subscribe({
      next: (res) => {
        // Registro exitoso: cerrar modal
        this.closeModal('registerModal');
        console.log('Registro exitoso', res);
      },
      error: (err) => {
        this.registerError = 'Error al registrar usuario';
      }
    });
  }

  private closeModal(modalId: string) {
    if (typeof window === 'undefined') return;
    const modalElement = document.getElementById(modalId);
    if (modalElement && (window as any).bootstrap) {
    
      const modalInstance = (window as any).bootstrap.Modal.getInstance(modalElement) || new (window as any).bootstrap.Modal(modalElement);
      modalInstance.hide();
    }
  }
}