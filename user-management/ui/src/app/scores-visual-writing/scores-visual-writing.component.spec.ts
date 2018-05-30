import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresVisualWritingComponent } from './scores-visual-writing.component';

describe('ScoresVisualWritingComponent', () => {
  let component: ScoresVisualWritingComponent;
  let fixture: ComponentFixture<ScoresVisualWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
