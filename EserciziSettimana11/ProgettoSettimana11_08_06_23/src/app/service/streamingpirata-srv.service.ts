import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../auth/auth-data';
import { tap, catchError, BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StreamingpirataSRVService {

  jwtHelper = new JwtHelperService();
  private jsonMovies = 'http://localhost:4201/api/';
  private authSubj = new BehaviorSubject<null | AuthData>(null);
  utente!: AuthData;

  user$ = this.authSubj.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getFilm():any {
    return this.httpClient.get(`${this.jsonMovies}movie/popular`);
  }

  getUsers():any {
    return this.httpClient.get(`${this.jsonMovies}users`);
  }

  singup(data: { nome: string; cognome: string; email: string; password: string; favourites:number[] }){
    data.favourites = [];
    return this.httpClient.post(`${this.jsonMovies}users`, data);
  }

  login(data: { email: string; password: string }){
    return this.httpClient.post<AuthData>(`${this.jsonMovies}login`, data).pipe(
          tap((data) => {
          this.authSubj.next(data);
          this.utente = data;
          localStorage.setItem('user', JSON.stringify(data));
      }),
      catchError(this.errors)
  )
  }

  putFav(arr: number[], userId:number): void{
    const body = {favourites: arr};
    this.httpClient.put<any>(`${this.jsonMovies}users/${userId}`, body);
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  private errors(err: any) {
    switch (err.error) {
        case 'Email already exists':
          return throwError('Utente già presente');
          break;

        case 'Email format is invalid':
          return throwError('Formato mail non valido');
          break;

        default:
          return throwError('Errore nella chiamata');
          break;
    }
  }

}
