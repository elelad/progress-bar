import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBoxComponent } from './bar-box.component';

describe('BarBoxComponent', () => {
  let component: BarBoxComponent;
  let fixture: ComponentFixture<BarBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
