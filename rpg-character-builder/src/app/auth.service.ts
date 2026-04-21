import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    this.users = [
      { empId: 2001, email: 'starweaver@elderlands.com', password: 'Dragonbane88' },
      { empId: 2002, email: 'shadowstride@elderlands.com', password: 'Nightfall42' },
      { empId: 2003, email: 'runesmith@elderlands.com', password: 'AnvilStrike1' },
      { empId: 2004, email: 'hearthward@elderlands.com', password: 'Emberheart9' },
      { empId: 2005, email: 'tidecaller@elderlands.com', password: 'Stormsea33' }
    ];

    if (this.cookieService.get('session_user')) {
      this.authState.next(true);
    }
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    }
    this.authState.next(false);
    return false;
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
