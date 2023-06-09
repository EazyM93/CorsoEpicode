import { Component, OnInit } from '@angular/core';
import { StreamingpirataSRVService } from 'src/app/service/streamingpirata-srv.service';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {



  constructor(private moviesSrv: StreamingpirataSRVService) { }

  ngOnInit(): void {
  }

}
