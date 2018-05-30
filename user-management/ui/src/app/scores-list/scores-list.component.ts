import { element } from 'protractor';
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

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent implements OnInit {
  p: number = 1;
  scores: Score[];
  /*
  score1 = {dbn: '01M292',
            num_of_sat_test_takers: '29',
            sat_critical_reading_avg_score: '355',
            sat_math_avg_score: '404',
            sat_writing_avg_score: '363',
            school_name: 'HENRY STREET SCHOOL FOR INTERNATIONAL STUDIES'};

  score2 = {dbn: '01M448',
            num_of_sat_test_takers: '91',
            sat_critical_reading_avg_score: '383',
            sat_math_avg_score: '423',
            sat_writing_avg_score: '366',
            school_name: 'UNIVERSITY NEIGHBORHOOD HIGH SCHOOL'};

  score3 = {dbn: '01M450',
            num_of_sat_test_takers: '70',
            sat_critical_reading_avg_score: '377',
            sat_math_avg_score: '402',
            sat_writing_avg_score: '370',
            school_name: 'EAST SIDE COMMUNITY SCHOOL'};
  
  score4 = {dbn: '01M458',
            num_of_sat_test_takers: '7',
            sat_critical_reading_avg_score: '414',
            sat_math_avg_score: '401',
            sat_writing_avg_score: '359',
            school_name: 'FORSYTH SATELLITE ACADEMY'};

  score5 = {dbn: '01M509',
            num_of_sat_test_takers: '44',
            sat_critical_reading_avg_score: '390',
            sat_math_avg_score: '433',
            sat_writing_avg_score: '384',
            school_name: 'MARTA VALLE HIGH SCHOOL'};
  scores = [this.score1, this.score2, this.score3, this.score4, this.score5];
  */
  constructor(private searchService: ScoresListService,
              private route: ActivatedRoute,) {
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