import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/app/models/photos';
import { GetApiService } from 'src/app/service/get-api.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.scss']
})
export class PhotoDisplayComponent implements OnInit {

  photosArr: Photos[] | any = [];

  favourites: number = 0;

  constructor(private photoSrv:GetApiService) { }

  ngOnInit(): void {

    this.photoSrv.getPhotos().subscribe(photos => {
      this.photosArr = photos;
    }), (err: any)=>{
      alert(err);
    }

  }

  onDeletePhoto(id:number){

    this.photosArr.forEach((element:Photos) => {
      if(element.id === id) this.photosArr.splice(this.photosArr.indexOf(element), 1);
    });

  }

  onFavorite(){
    this.favourites++;
  }

}
