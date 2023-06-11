import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  flag:boolean = false;
  mail:string = '';

  constructor(private authSrv: StreamingpirataSRVService, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.flag = true;
      this.mail = JSON.parse(localStorage.getItem('user')!).email;
    }
  }

  accedi(form: NgForm) {
    try {
        this.authSrv.login(form.value).subscribe();
        alert('Login effettuato!');
        this.router.navigate(['movies']);
    } catch (error) {
        alert('Login sbagliato!');
        console.error(error);
    }
  }

  logginOut(){this.authSrv.logout()}
}
