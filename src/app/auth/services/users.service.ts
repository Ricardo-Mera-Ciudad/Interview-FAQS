import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environment/environment';
import { Observable, Subject, tap, map, catchError, of, switchMap, BehaviorSubject } from 'rxjs';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private http = inject(HttpClient);

  private baseUrl: string = environments.baseUrl;
  private user?: UserData | null;

  public userAddedSubject$ = new Subject<UserData>();
  public userToUpdateSubject$ = new Subject<UserData>();
  private authenticatedUserSubject$ = new BehaviorSubject<UserData | null>(null);


  setUserAddedSubject(user: UserData): void {
    this.userAddedSubject$.next(user);
  };

  getAddedUserSubject(): Observable<UserData> {
    return this.userAddedSubject$.asObservable();
  };


  setUserToUpdateSubject(user: UserData): void {
    this.userToUpdateSubject$.next(user);
  };

  getUpdatedUserSubject(): Observable<UserData> {
    return this.userToUpdateSubject$.asObservable();
  };


  setAuthenticatedUserSubject(user: UserData | null): void {
    this.authenticatedUserSubject$.next(user)
  };

  getAuthenticatedUserSubject(): Observable<UserData | null> {
    return this.authenticatedUserSubject$.asObservable();
  };


  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(`${this.baseUrl}/users`, user)
      .pipe(
        tap((addedUser) => {
          this.setUserAddedSubject(addedUser);
        })
      )
  };


  updateUser(user: UserData): Observable<UserData> {
    if (!user.id) throw Error('User id is required');

    return this.http.patch<UserData>(`${this.baseUrl}/users/${user.id}`, user)
      .pipe(
        tap(updatedUser => {
          console.log('Respuesta del servidor después de la actualización:', updatedUser);
          this.setUserToUpdateSubject(updatedUser);
        })
      );
  };


  deleteUserById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      )
  };


  getUserById(id: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/users/${id}`);
  };


  createJwtToken(payload: any) {
    const base64Url = btoa(JSON.stringify(payload));
    return base64Url;
  };


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
  };


  logout():void {
    this.user = null;
    localStorage.removeItem('authToken');
    this.setAuthenticatedUserSubject(null);
  };

}