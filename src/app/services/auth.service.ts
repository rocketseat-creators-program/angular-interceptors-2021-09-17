import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  email: string;
  password: string;
  firstname: string;
  age: number;
}

export interface AuthResponse {
  accessToken: string;
  user: Omit<User, 'password'>
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private accessToken?: string;
  private userFirstnameSubject = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, user).pipe(
      tap((res: AuthResponse) => {
        this.setCurrentUser(res);
        this.router.navigate(['/']);
      })
    );
  }

  login(user: Pick<User, 'email' | 'password'>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user).pipe(
      tap((res: AuthResponse) => {
        this.setCurrentUser(res);
        this.router.navigate(['/']);
      }),
    );
  }

  logout(): void {
    this.deleteCurrentUser();
    this.router.navigate(['login']);
  }

  setCurrentUser(authResponse: AuthResponse): void {
    this.accessToken = authResponse.accessToken;
    this.userFirstnameSubject.next(authResponse.user.firstname);
  }

  deleteCurrentUser(): void {
    this.accessToken = '';
    this.userFirstnameSubject.next('');
  }

  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  getUserFirstname(): Observable<string> {
    return this.userFirstnameSubject.asObservable();
  }
}
