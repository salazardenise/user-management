import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesMapComponent } from './venues-map.component';

describe('VenuesMapComponent', () => {
  let component: VenuesMapComponent;
  let fixture: ComponentFixture<VenuesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
