import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantToEquipeContratComponent } from './add-etudiant-to-equipe-contrat.component';

describe('AddEtudiantToEquipeContratComponent', () => {
  let component: AddEtudiantToEquipeContratComponent;
  let fixture: ComponentFixture<AddEtudiantToEquipeContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtudiantToEquipeContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtudiantToEquipeContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
