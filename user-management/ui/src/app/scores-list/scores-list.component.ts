import { ScoresListService } from './scores-list.service';
import { Component, OnInit } from '@angular/core';
import {Score} from './../types/score';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent implements OnInit {

  scores: Score[];

  constructor(private searchService: ScoresListService) { }

  ngOnInit() {
      this.searchService.getScores()
      .subscribe((response) => {
        this.scores = response});
  }

}
