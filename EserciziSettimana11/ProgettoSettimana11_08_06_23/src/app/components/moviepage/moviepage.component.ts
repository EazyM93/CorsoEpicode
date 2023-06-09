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

  constructor(private moviesSrv: StreamingpirataSRVService) { }

  ngOnInit(): void {

    this.moviesSrv.getFilm().subscribe((data: any) => {
      this.movies = data;
      console.log(this.movies);
      this.loading = true;
    });

  }

}
