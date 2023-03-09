import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  title = 'Bhargav_Home';
  value = 'Clear me';
  name = new FormControl('');


  continueAction(x: any): any {
   console.log(x);
   this.service.setName(x);
   this.router.navigate(['/invite']);
  }

}
