import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdmissionComponent } from './patient-admission.component';

describe('PatientAdmissionComponent', () => {
  let component: PatientAdmissionComponent;
  let fixture: ComponentFixture<PatientAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
