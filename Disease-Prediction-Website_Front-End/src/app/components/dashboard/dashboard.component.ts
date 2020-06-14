import { Component, OnInit } from '@angular/core';
import { Disease } from '../../models/disease.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened:boolean = false;
  diseases:Disease[] = [
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''},
    {id:1,name:'diabetes',description:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:''}
  ];
  constructor() { }

  ngOnInit() {
  }
log(s){
  console.log(s)
}
}
