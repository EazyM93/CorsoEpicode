import { Component, OnInit } from '@angular/core';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

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

  }
}
