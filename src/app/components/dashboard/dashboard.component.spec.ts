import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard.routing.module';

import { DashboardComponent } from './dashboard.component';
import { DiseaseListComponent } from './disease-list/disease-list.component';
import { DiseasePredictComponent } from './disease-predict/disease-predict.component';
import { DiseaseDetailComponent } from './disease-detail/disease-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DiseaseListComponent,
        DiseasePredictComponent,
        DiseaseDetailComponent],
      imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        MatIconModule,
        MatSidenavModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
