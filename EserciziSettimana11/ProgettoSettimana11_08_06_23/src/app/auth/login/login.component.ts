import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private movieSrv: StreamingpirataSRVService) {}

  ngOnInit(): void {}

  register(form: NgForm): void {
    try{
      this.movieSrv.singup(form.value).subscribe();
    }catch(e){console.log(e);}
  }

}
