import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // Login con usuario y contraseña
  login(username: string, password: string): Observable<HttpResponse<any>> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { username, password }, { observe: 'response', withCredentials: true })
      .pipe(
        tap((response) => {
          if (response.status === 204) {
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  // Registro con email, usuario y contraseña
  register(email: string, username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      email,
      username,
      password
    }, { withCredentials: true });
  }

  // Verifica si la sesión es válida (llama a un endpoint protegido)
  checkSession(): void {
    this.http.get(`${this.apiUrl}/auth/me`, { withCredentials: true }).pipe(
      tap(() => this.isLoggedInSubject.next(true)),
      catchError(() => {
        this.isLoggedInSubject.next(false);
        return of(null);
      })
    ).subscribe();
  }

  logout(): void {
    // Llama al endpoint de logout si existe
    this.http.post(`${this.apiUrl}/auth/logout`, {}, { withCredentials: true }).subscribe(() => {
      this.isLoggedInSubject.next(false);
    }, () => {
      this.isLoggedInSubject.next(false);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}