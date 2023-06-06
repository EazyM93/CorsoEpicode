import { Injectable } from '@angular/core';

//importo httpclient per eseguire la request
import { HttpClient } from '@angular/common/http';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {}

  getPhotos() {
      return this.httpClient.get(this.apiUrl);
  }

}
