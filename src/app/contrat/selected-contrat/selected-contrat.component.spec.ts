import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedContratComponent } from './selected-contrat.component';

describe('SelectedContratComponent', () => {
  let component: SelectedContratComponent;
  let fixture: ComponentFixture<SelectedContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
