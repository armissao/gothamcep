import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCepComponent } from './add-cep.component';

describe('AddCepComponent', () => {
  let component: AddCepComponent;
  let fixture: ComponentFixture<AddCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
