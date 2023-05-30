import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  async getData() {
    return (await fetch('./assets/db.json')).json()
  }

}
