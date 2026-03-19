import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndEvenBinding } from './data-and-even-binding';

describe('DataAndEvenBinding', () => {
  let component: DataAndEvenBinding;
  let fixture: ComponentFixture<DataAndEvenBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataAndEvenBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAndEvenBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
