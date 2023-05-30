import { Component, OnInit } from '@angular/core';
import { DatiPost } from 'src/app/models/dati-post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})

export class PostNonAttiviComponent implements OnInit {

  datipost: DatiPost[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.getData().then((response) => {
      this.datipost = response;
    })
  }

  ngOnInit(): void {
  }

}
