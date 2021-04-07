import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Disease } from 'src/app/models/disease.model';
import { Field } from 'src/app/models/field.model';
import { fieldReducer } from 'src/app/reducers/field.reducers';
import { DiseasePredictComponent } from './disease-predict.component';

describe('DashboardPredictComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DiseasePredictComponent],
            imports: [
                StoreModule.forRoot({}),
                RouterModule.forRoot([]),
                FormsModule,
                ReactiveFormsModule,
                StoreModule.forFeature('fields', fieldReducer)],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    it('should create the app', () => {
        let fixture = TestBed.createComponent(DiseasePredictComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have 3 fields', () => {
        let fixture = TestBed.createComponent(DiseasePredictComponent);
        let app = fixture.debugElement.componentInstance;
        app.fieldsObservable = new Subject<{ fields: Field[] }>();
        fixture.detectChanges();
        app.fieldsObservable.next({
            fields: [
                new Field(0, "number", "Protein", "1"),
                new Field(1, "text", "Age", "20"),
                new Field(2, "text", "Gender", "M"),
            ]
        });
        expect(app.fields.length).toEqual(3);
        expect(app.predictionForm.get('disease-data').length).toEqual(3);
    });

    it('should render disease name and image', () => {
        let fixture = TestBed.createComponent(DiseasePredictComponent);
        let app = fixture.debugElement.componentInstance;
        app.disease = new Disease(0, "Liver", "Dangerous", "emptyimage");
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain(app.disease.name);
        expect(compiled.querySelector('img').src).toContain(app.disease.image);
    });
});
