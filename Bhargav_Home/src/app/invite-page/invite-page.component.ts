import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.css']
})
export class InvitePageComponent implements OnInit {

  constructor(private service: HomeService) { }
  name: any = '';
  ngOnInit(): void {
    this.name = this.service.getName();
  }

}
