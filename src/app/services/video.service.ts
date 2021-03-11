import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getStream(): Observable<any> {
    return this.http.get(`${baseURL}/video_feed`);
  }
}
