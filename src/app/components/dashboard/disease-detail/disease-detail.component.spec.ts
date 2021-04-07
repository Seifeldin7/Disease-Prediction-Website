import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiseaseDetailComponent } from './disease-detail.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


describe('DashboardDetailComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DiseaseDetailComponent],
            imports: [RouterModule.forRoot([])],
            providers: [
              { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    it('should create the app', () => {
        let fixture = TestBed.createComponent(DiseaseDetailComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
