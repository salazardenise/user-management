import { ActivatedRoute } from '@angular/router';
import { VenuesService } from './venues.service';
import { VenuesMapComponent } from './../venues-map/venues-map.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesComponent } from './venues.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('VenuesComponent', () => {
  let component: VenuesComponent;
  let fixture: ComponentFixture<VenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesComponent,
                      VenuesMapComponent ],
      imports: [ NgxPaginationModule ,
                 HttpClientModule,
                 RouterTestingModule ],
      providers: [ VenuesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should render Times Square Entertainmet Venues in the table caption', async(() => {
    const fixture = TestBed.createComponent(VenuesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('caption').textContent).toContain('Times Square Entertainmet Venues');
  }));
  */

});
