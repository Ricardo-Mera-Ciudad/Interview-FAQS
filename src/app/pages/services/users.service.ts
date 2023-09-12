import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environment/environment';
import { Observable, Subject, tap, map, catchError, of } from 'rxjs';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environments.baseUrl;
  public userAdded = new Subject<UserData>();
  public userToUpdate = new Subject<UserData>();

  constructor(private http: HttpClient) {}

  addUser(user: UserData): Observable<UserData>{
    return this.http.post<UserData>(`${this.baseUrl}/users`, user)
    .pipe(
      tap((addedUser) => {
        this.userAdded.next(addedUser)
      })
    )
  }

  getAddedUser(): Observable<UserData> {
    return this.userAdded.asObservable()
  }

  updateUser(user: UserData): Observable<UserData> {
    if(!user.id) throw Error('User id is required');
    return this.http.patch<UserData>(`${this.baseUrl}/users/${user.id}`, user)
            .pipe(
              tap(updatedUser => this.userToUpdate.next(updatedUser))
            )
  }

  getUpdatedUser(): Observable<UserData> {
    return this.userToUpdate.asObservable();
  }

  deleteUserById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/users/${id}`)
          .pipe(
            map(() => true),
            catchError(() => of(false))
          )
  }

}
