import { Component, OnInit } from '@angular/core';
import { DatiPost } from 'src/app/models/dati-post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})

export class PostAttiviComponent implements OnInit {

  datipost: DatiPost[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.getData().then((response) => {
      this.datipost = response;
    })
  }

  ngOnInit(): void {
  }

}
