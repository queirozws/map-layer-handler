import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLayerComponent } from './filter-layer.component';

describe('FilterLayerComponent', () => {
  let component: FilterLayerComponent;
  let fixture: ComponentFixture<FilterLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
