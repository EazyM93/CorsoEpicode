import { Component, OnInit } from '@angular/core';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  variabileUtente: boolean = false;

  constructor(private moviesSrv: StreamingpirataSRVService) { }

  ngOnInit(): void {
  }

  checkUserWelcome(){
    return (this.variabileUtente) ? `Ciao Manuel!
    Bentornato!` : `Sei un nuovo utente!
    Registrati per usufruire dei nostri servizi!`;
  }
}
