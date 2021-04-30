import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NurseManagementComponent } from './nurse-management.component';


describe('NurseManagementComponent', () => {
  let component: NurseManagementComponent;
  let fixture: ComponentFixture<NurseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
