import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjspreviewComponent } from './pjspreview.component';

describe('PjspreviewComponent', () => {
  let component: PjspreviewComponent;
  let fixture: ComponentFixture<PjspreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PjspreviewComponent]
    });
    fixture = TestBed.createComponent(PjspreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
