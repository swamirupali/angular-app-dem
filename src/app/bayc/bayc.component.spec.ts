import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaycComponent } from './bayc.component';

describe('BaycComponent', () => {
  let component: BaycComponent;
  let fixture: ComponentFixture<BaycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
