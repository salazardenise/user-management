import { D3Service } from 'd3-ng2-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoresVisualWritingComponent } from './scores-visual-writing.component';

describe('ScoresVisualWritingComponent', () => {
  let component: ScoresVisualWritingComponent;
  let fixture: ComponentFixture<ScoresVisualWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresVisualWritingComponent ],
      providers: [ D3Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresVisualWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
