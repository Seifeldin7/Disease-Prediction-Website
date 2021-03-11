import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class DiseaseService {
    constructor (private http: HttpClient) {}
  
    getAllDiseases() {
      return this.http.get('/movies');
    }
  }