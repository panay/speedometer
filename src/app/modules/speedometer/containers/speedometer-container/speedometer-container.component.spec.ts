import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometerContainerComponent } from './speedometer-container.component';

describe('SpeedometerContainerComponent', () => {
  let component: SpeedometerContainerComponent;
  let fixture: ComponentFixture<SpeedometerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedometerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedometerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
