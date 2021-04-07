import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Disease } from 'src/app/models/disease.model';
import { Field } from 'src/app/models/field.model';
import { fieldReducer } from 'src/app/reducers/field.reducers';
import { DiseasePredictComponent } from './disease-predict.component';

describe('DashboardPredictComponent', () => {
    let component: DiseasePredictComponent | any;
    let fixture: ComponentFixture<DiseasePredictComponent>;
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

    beforeEach(() => {
         fixture = TestBed.createComponent(DiseasePredictComponent);
         component = fixture.debugElement.componentInstance;
    });

    it('should create the DashboardPredictComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should have 3 fields', () => {
        component.fieldsObservable = new Subject<{ fields: Field[] }>();
        fixture.detectChanges();
        component.fieldsObservable.next({
            fields: [
                new Field(0, "number", "Protein", "1"),
                new Field(1, "text", "Age", "20"),
                new Field(2, "text", "Gender", "M"),
            ]
        });
        expect(component.fields.length).toEqual(3);
        expect((<FormArray>component.predictionForm.get('disease-data')).length).toEqual(3);
    });

    it('should render disease name and image', () => {
        component.diseasesObservable = new Subject<{ diseases: Disease[], prediction: number }>();
        component.diseasesObservable.next({
            diseases: [
                new Disease(0, "number", "Protein", "1"),
                new Disease(1, "text", "Age", "20"),
                new Disease(2, "text", "Gender", "M"),
            ]
        });
        component.disease = new Disease(0, "Liver", "Dangerous", "emptyimage");
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain(component.disease.name);
        expect(compiled.querySelector('img').src).toContain(component.disease.image);
    });
});
