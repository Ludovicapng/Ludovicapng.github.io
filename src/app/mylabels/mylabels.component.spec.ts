import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylabelsComponent } from './mylabels.component';

describe('MylabelsComponent', () => {
  let component: MylabelsComponent;
  let fixture: ComponentFixture<MylabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MylabelsComponent]
    });
    fixture = TestBed.createComponent(MylabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
