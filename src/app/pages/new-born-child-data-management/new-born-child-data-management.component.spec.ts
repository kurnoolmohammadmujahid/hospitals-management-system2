import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBornChildDataManagementComponent } from './blood-bank-management.component';

describe('NewBornChildDataManagementComponent', () => {
  let component: NewBornChildDataManagementComponent;
  let fixture: ComponentFixture<NewBornChildDataManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBornChildDataManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBornChildDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
