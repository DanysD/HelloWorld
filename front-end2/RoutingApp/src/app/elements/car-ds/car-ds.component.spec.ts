import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDsComponent } from './car-ds.component';

describe('CarDsComponent', () => {
  let component: CarDsComponent;
  let fixture: ComponentFixture<CarDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
