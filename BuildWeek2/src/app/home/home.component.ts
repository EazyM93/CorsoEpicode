import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PhotosProp } from '../models/photos-prop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groupPhoto: PhotosProp[] = [];

  constructor(private photoSrv: PostsService) { }

  ngOnInit(): void {
    this.photoSrv.getPhotos().subscribe((data:any) => {
      console.log(data)
      this.groupPhoto = data;
    })
  }

}
