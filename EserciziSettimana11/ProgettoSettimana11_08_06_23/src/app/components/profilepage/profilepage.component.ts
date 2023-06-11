import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {

  users: any[] = [];
  currentUserId: number = 0;
  currentUserName: string = '';
  currentUserSurname: string = '';
  currentUserEmail: string = '';
  loading: boolean = false;


  constructor(private dataSrv: StreamingpirataSRVService) {}

  ngOnInit(): void {

    this.dataSrv.getUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user: any) =>{
        if(JSON.parse(localStorage.getItem('user')!).email === user.email) {
          this.currentUserId = user.id;
          this.currentUserName = `${user.nome} ${user.cognome}`;
          this.currentUserEmail = user.email;
          this.loading = true;
        }
      });

    })

  }


}
