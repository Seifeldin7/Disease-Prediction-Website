import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FieldService {
    constructor(private http: HttpClient) { }

    getDiseaseFields(diseaseId: number) {
        return this.http.get('http://127.0.0.1:8000/fields/?diseaseId=' + diseaseId);
    }
}
