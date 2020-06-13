import { Component, Inject, OnInit } from '@angular/core';
import { VideoService } from './services/video.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Disease-Prediction-Website';
  videoimage:any
  constructor(private videoService: VideoService){}
  
    ngOnInit(){
      setTimeout(()=>{
        this.videoService.getStream().subscribe(res=>{
          this.videoimage = res.image;
        });
        console.log(this.videoimage);
      },5)
      
    }
}
