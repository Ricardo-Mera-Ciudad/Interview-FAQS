import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environment/environment';
import { Observable, Subject, tap, map, catchError, of, switchMap, BehaviorSubject } from 'rxjs';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = environments.baseUrl;
  private user?: UserData | null;
  public userAdded = new Subject<UserData>();
  public userToUpdate = new Subject<UserData>();
  private authenticatedUserSubject = new BehaviorSubject<UserData | null>(null);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkLoginStatus();
  }

  setAuthenticatedUserSubject(user: UserData): void {
    this.authenticatedUserSubject.next(user)
  }

  getAuthenticatedUserSubject(): Observable<UserData | null> {
    return this.authenticatedUserSubject.asObservable();
  }

  checkLoginStatus(){
    const authToken = localStorage.getItem('authToken');
    if(authToken) {
      this.isLoggedInSubject.next(true)
    } else {
      this.isLoggedInSubject.next(false);
    }
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }


  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(`${this.baseUrl}/users`, user)
      .pipe(
        tap((addedUser) => {
          this.userAdded.next(addedUser)
        })
      )
  }

  getAddedUser(): Observable<UserData> {
    return this.userAdded.asObservable();
  }

  updateUser(user: UserData): Observable<UserData> {
    if (!user.id) throw Error('User id is required');
    return this.http.patch<UserData>(`${this.baseUrl}/users/${user.id}`, user)
      .pipe(
        tap(updatedUser => this.userToUpdate.next(updatedUser))
      )
  }

  getUpdatedUser(): Observable<UserData> {
    return this.userToUpdate.asObservable();
  }

  deleteUserById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
  }

  getUserById(id: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/users/${id}`)
  }

  createJwtToken(payload: any) {
    const base64Url = btoa(JSON.stringify(payload));
    return base64Url;
  }

  login(email: string, password: string): Observable<UserData | null> {
    return this.http.get<UserData[]>(`${this.baseUrl}/users`).pipe(
      switchMap(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.user = user;
          const authData = {
            token: this.createJwtToken({ sub: user.id, email: user.email }),
            userId: user.id
          }
          localStorage.setItem('authToken', JSON.stringify(authData));
          this.setAuthenticatedUserSubject(user)
        }
        return of(user || null);
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  logout() {
    this.user = null;
    localStorage.removeItem('authToken');
    this.authenticatedUserSubject.next(null);
  }


}
