import { ScoresListService } from './scores-list.service';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import {Score} from './../types/score';
import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';
import { ActivatedRoute, Params } from '@angular/router';
import { dummyScores } from './../dummy-values/dummy-scores'

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent implements OnInit {
  p: number = 1;
  scores: Score[];
  /*
  // dummy scores
  scores = dummyScores;
  */
  constructor(private searchService: ScoresListService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    /*
    this.searchService.getScores()
    .subscribe((response) => {
      this.scores = response});  
    */   
    this.route.data.subscribe((data: {scores : Score[]}) => {
      this.scores = data.scores;
    })
      
  }
}