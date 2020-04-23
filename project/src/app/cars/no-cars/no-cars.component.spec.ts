import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCarsComponent } from './no-cars.component';

describe('NoCarsComponent', () => {
  let component: NoCarsComponent;
  let fixture: ComponentFixture<NoCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
