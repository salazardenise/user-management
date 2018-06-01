import { D3Service } from 'd3-ng2-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoresVisualComponent } from './scores-visual.component';

describe('ScoresVisualComponent', () => {
  let component: ScoresVisualComponent;
  let fixture: ComponentFixture<ScoresVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualComponent ],
      providers: [ D3Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    const fixture = TestBed.createComponent(ScoresVisualComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
*/
});
