import { Component, OnInit } from '@angular/core';
import { Disease } from '../../models/disease.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }
  log(s) {
    console.log(s)
  }
}
