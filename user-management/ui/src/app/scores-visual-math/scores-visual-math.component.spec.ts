import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresVisualMathComponent } from './scores-visual-math.component';

describe('ScoresVisualMathComponent', () => {
  let component: ScoresVisualMathComponent;
  let fixture: ComponentFixture<ScoresVisualMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
