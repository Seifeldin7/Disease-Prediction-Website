import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DiseaseService {
    constructor(private http: HttpClient) { }

    getAllDiseases() {
        return this.http.get('http://127.0.0.1:8000/diseases/');
    }

    predictDisease(diseaseId: number, formValues: any) {
        return this.http.post('http://127.0.0.1:8000/predict/?diseaseId=' + diseaseId, formValues);
    }
}
