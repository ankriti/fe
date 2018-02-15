import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySliderComponent } from './display-slider.component';

describe('DisplaySliderComponent', () => {
  let component: DisplaySliderComponent;
  let fixture: ComponentFixture<DisplaySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
