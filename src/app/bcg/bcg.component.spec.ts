import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcgComponent } from './bcg.component';

describe('BcgComponent', () => {
  let component: BcgComponent;
  let fixture: ComponentFixture<BcgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcgComponent]
    });
    fixture = TestBed.createComponent(BcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
