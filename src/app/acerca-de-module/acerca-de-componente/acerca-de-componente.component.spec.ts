import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeComponenteComponent } from './acerca-de-componente.component';

describe('AcercaDeComponenteComponent', () => {
  let component: AcercaDeComponenteComponent;
  let fixture: ComponentFixture<AcercaDeComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcercaDeComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
