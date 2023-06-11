import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private movieSrv: StreamingpirataSRVService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    try{
      this.movieSrv.singup(form.value).subscribe();
      this.router.navigate(['login']);
    }catch(e){console.log(e);}
  }

}
