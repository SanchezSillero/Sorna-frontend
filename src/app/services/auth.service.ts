import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      this.isLoggedInSubject.next(this.hasToken());
    }
  }

  // Login con usuario y contraseña
  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.access_token);
          this.isLoggedInSubject.next(true);
        })
      );
  }

  // Registro con email, usuario y contraseña
  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      email,
      username,
      password
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  private hasToken(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  }
}