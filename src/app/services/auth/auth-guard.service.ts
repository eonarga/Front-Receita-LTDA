import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private users: IUser[] = [];
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
