import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAdmissionComponent } from './print-admission.component';

describe('PrintAdmissionComponent', () => {
  let component: PrintAdmissionComponent;
  let fixture: ComponentFixture<PrintAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
