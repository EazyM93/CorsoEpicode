import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

@Component({
  selector: 'app-favouritespage',
  templateUrl: './favouritespage.component.html',
  styleUrls: ['./favouritespage.component.scss']
})
export class FavouritespageComponent implements OnInit {

  baseUrl: string = 'http://image.tmdb.org/t/p/w500';
  users: User[] = [];
  arrFav: number[] =[];
  loading: boolean = false;
  movies: any[] = [];

  constructor(private userSrv: StreamingpirataSRVService) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user: User) =>{
        console.log(JSON.parse(localStorage.getItem('user')!).email)
        console.log(user.email)
        if(JSON.parse(localStorage.getItem('user')!).email === user.email) {
          this.arrFav = user.favourites;
        }
      });
      this.loading = true;
    });

    this.userSrv.getFilm().subscribe((data: any) => {
      this.movies = data;
      console.log(this.movies);
      this.loading = true;
    });
  }



}
