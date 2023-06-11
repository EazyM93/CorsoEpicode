import { Injectable } from '@angular/core';
// importo httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamingpirataSRVService {

  // link del json
  private jsonMovies = 'http://localhost:4201/api/movie/popular';

  constructor(private httpClient: HttpClient) {} // variabile per eseguire le funzioni della get

  // esegui la get del json
  getFilm():any {
    return this.httpClient.get(this.jsonMovies);
  }

  singup(data: { nome: string; cognome: string; email: string; password: string; favourites:number[] }){
    data.favourites = [];
    return this.httpClient.post('http://localhost:4201/api/users', data);
  }

}
