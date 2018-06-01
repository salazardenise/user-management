import { D3Service } from 'd3-ng2-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoresVisualMathComponent } from './scores-visual-math.component';

describe('ScoresVisualMathComponent', () => {
  let component: ScoresVisualMathComponent;
  let fixture: ComponentFixture<ScoresVisualMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualMathComponent ],
      providers: [ D3Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
