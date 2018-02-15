import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySliderFeaturedComponent } from './display-slider-featured.component';

describe('DisplaySliderFeaturedComponent', () => {
  let component: DisplaySliderFeaturedComponent;
  let fixture: ComponentFixture<DisplaySliderFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySliderFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySliderFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
