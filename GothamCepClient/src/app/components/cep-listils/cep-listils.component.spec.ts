import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepListilsComponent } from './cep-listils.component';

describe('CepListilsComponent', () => {
  let component: CepListilsComponent;
  let fixture: ComponentFixture<CepListilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepListilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepListilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
