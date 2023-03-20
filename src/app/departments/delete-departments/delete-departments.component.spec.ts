import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentsComponent } from './delete-departments.component';

describe('DeleteDepartmentsComponent', () => {
  let component: DeleteDepartmentsComponent;
  let fixture: ComponentFixture<DeleteDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
