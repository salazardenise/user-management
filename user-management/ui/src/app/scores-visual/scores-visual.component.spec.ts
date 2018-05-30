import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresVisualComponent } from './scores-visual.component';

describe('ScoresVisualComponent', () => {
  let component: ScoresVisualComponent;
  let fixture: ComponentFixture<ScoresVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
