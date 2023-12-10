import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private isLoggedInVar = false;

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  login(email: string, password: string): boolean {
    // Lógica de autenticação simulada
    if (email === 'email' && password === 'password') {
      this.isLoggedInVar = true;
      return true;
    } else {
      this.isLoggedInVar = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedInVar = false;
  }
}
