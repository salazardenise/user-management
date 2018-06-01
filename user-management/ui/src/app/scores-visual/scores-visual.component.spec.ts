import { D3Service } from 'd3-ng2-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoresVisualComponent } from './scores-visual.component';
import { ViewChild, Component } from '@angular/core';

describe('ScoresVisualComponent', () => {
  let component: ScoresVisualComponent;
  let fixture: ComponentFixture<ScoresVisualComponent>;
  //let testHostComponent: TestHostComponent;
  let scores = [];

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

/*
  it('should show empty array', () => {
    testHostComponent.scoresVisualComponent.scores = this.scores;;
    fixture.detectChanges();
    expect(testHostComponent.scoresVisualComponent.scores).toBe([]);
  });
  @Component({
    selector: `app-scores-list`,
    template: `<app-scores-list></app-scores-list>`
  })
  class TestHostComponent {
    @ViewChild(ScoresVisualComponent)
    public scoresVisualComponent: ScoresVisualComponent;
  }
  */
});
