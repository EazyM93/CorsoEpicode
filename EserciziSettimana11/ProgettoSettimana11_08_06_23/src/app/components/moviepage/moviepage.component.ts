import { Component, OnInit } from '@angular/core';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-moviepage',
  templateUrl: './moviepage.component.html',
  styleUrls: ['./moviepage.component.scss']
})
export class MoviepageComponent implements OnInit {

  baseUrl: string = 'http://image.tmdb.org/t/p/w500';
  movies: any[] = [];
  loading: boolean = false;
  flag: boolean = false;
  users: any[] = [];
  arrFav: number[] =[];
  userId: number = 0;

  constructor(private moviesSrv: StreamingpirataSRVService) { }

  ngOnInit(): void {

    this.moviesSrv.getFilm().subscribe((data: any) => {
      this.movies = data;
      if(localStorage.getItem('user')) {this.flag = true};
      console.log(this.movies);
      this.loading = true;
    });

  }

  addFavourite(id:number):void {
    this.moviesSrv.getUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user: User) =>{
        console.log(JSON.parse(localStorage.getItem('user')!).email)
        console.log(user.email)
        if(JSON.parse(localStorage.getItem('user')!).email === user.email) {
          this.userId = user.id!;
          this.arrFav = user.favourites;
          this.arrFav.push(id);
          console.log(`${this.arrFav} è uscito`)
        }
      });
    });

    this.moviesSrv.putFav(this.arrFav, this.userId);

  }
}
