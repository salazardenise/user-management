import { D3Service } from 'd3-ng2-service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScoresVisualWritingComponent } from './../scores-visual-writing/scores-visual-writing.component';
import { ScoresVisualMathComponent } from './../scores-visual-math/scores-visual-math.component';
import { ScoresVisualComponent } from './../scores-visual/scores-visual.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoresListComponent } from './scores-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScoresListService } from './scores-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewChild, Component } from '@angular/core';

describe('ScoresListComponent', () => {
  let component: ScoresListComponent;
  let fixture: ComponentFixture<ScoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresListComponent,
                      ScoresVisualComponent,
                      ScoresVisualMathComponent,
                      ScoresVisualWritingComponent ],
      imports: [ NgxPaginationModule,
                HttpClientModule,
                RouterTestingModule ],
      providers: [ ScoresListService,
                  D3Service ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*
  it('should create', () => {
    const fixture = TestBed.createComponent(ScoresListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  */
 /*
  it('should render 2012 SAT Scores in the table caption', async(() => {
    const fixture = TestBed.createComponent(ScoresListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('caption').textContent).toContain('2012 SAT Scores');
  }));
  */
});
