import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario3ReactivoComponent } from './formulario3-reactivo.component';

describe('Formulario3ReactivoComponent', () => {
  let component: Formulario3ReactivoComponent;
  let fixture: ComponentFixture<Formulario3ReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formulario3ReactivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Formulario3ReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
